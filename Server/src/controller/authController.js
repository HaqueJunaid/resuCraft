import prisma from "../config/prisma.js";
import { generateOTP } from "../utils/otp.js";
import { hashPassword, verifyPassword } from "../utils/password.js";
import { generateToken } from "../utils/token.js";
import { generateForgotOTPTemplate, generateOTPTemplate, sendEmail } from "../utils/email.js";

export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        console.log({ email, password, name })

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        let user = await prisma.user.findUnique({ where: { email } });

        if (user && user.isVerified) {
            return res.status(400).json({ error: "User already exists and is verified. Please log in." });
        }

        const hashedPassword = await hashPassword(password);
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        if (user) {
            // Update unverified user with new OTP and password
            user = await prisma.user.update({
                where: { email },
                data: { password: hashedPassword, name, otp, otpExpiry },
            });
        } else {
            // Create new user
            user = await prisma.user.create({
                data: { email, password: hashedPassword, name, otp, otpExpiry },
            });
        }

        // Send OTP email
        const html = generateOTPTemplate(otp);

        try {
            await sendEmail({ to: email, subject: "Verify your account", html });
        } catch (emailError) {
            console.error("Failed to send OTP email", emailError);
            // Optionally, handle email failure here (e.g., return specific message)
        }

        return res.status(201).json({ message: "Registration successful. Please check your email for the OTP." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message, stack: error.stack });
    }
};

export const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ error: "Email and OTP are required" });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (user.isVerified) {
            return res.status(400).json({ error: "User is already verified" });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ error: "Invalid OTP" });
        }

        if (new Date() > new Date(user.otpExpiry)) {
            return res.status(400).json({ error: "OTP has expired" });
        }

        // Mark as verified and clear OTP fields
        await prisma.user.update({
            where: { email },
            data: {
                isVerified: true,
                otp: null,
                otpExpiry: null,
            },
        });

        // Optionally, generate and return a token here to log them in immediately
        const token = generateToken({ id: user.id, email: user.email });

        return res.status(200).json({ message: "Account verified successfully", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        if (!user.isVerified) {
            return res.status(403).json({ error: "Account not verified. Please verify your email first." });
        }

        const isValidPassword = await verifyPassword(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = generateToken({ id: user.id, email: user.email });

        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).send({ error: "Email Required" });
        }

        const user = await prisma.user.findFirst({ where: { email } });

        if (!user) {
            return res.status(404).send({ error: "User Not Found" });
        }

        if (!user.isVerified) {
            return res.status(403).send({ error: "Account Not Verified" });
        }

        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

        await prisma.user.update({
            where: { email },
            data: { forgotOtp: otp, forgotOtpExpiry: otpExpiry }
        });

        let html = generateForgotOTPTemplate(otp);

        try {
            await sendEmail({ to: email, subject: "Change your account password", html });
        } catch (emailError) {
            console.error("Failed to send OTP email", emailError);
        }

        return res.status(200).send({ message: "Check your email to forget your account password" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message, stack: error.stack });
    }
}

export const resetPassword = async (req, res) => {
    try {
        const { email, otp, password } = req.body;

        if (!email || !otp || !password) {
            return res.status(400).send({ error: "All fields are required" });
        }

        let user = await prisma.user.findFirst({where: { email }});

        if (!user || !user.isVerified) {
            return res.status().send({ error: "User not found" });
        }

        if(user.forgotOtp !== otp || new Date() > new Date(user.forgotOtpExpiry)) {
            return res.status().send({ error: "Invalid or expired OTP" });
        }

        const hashedPassword = await hashPassword(password);

        console.log({user, hashPassword});

        let updatedUser = await prisma.user.update({
            where: { email },
            data: { password: hashedPassword, forgotOtp: null, forgotOtpExpiry: null }
        })

        const token = generateToken({ id: updatedUser.id, email: updatedUser.email });

        return res.status(200).json({ message: "Password reset successful", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message, stack: error.stack });
    }
}