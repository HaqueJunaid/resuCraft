import { Router } from "express";
import { userModel } from "../models/user.model.js";
import { signJWT } from "../utils/signJWT.js";
import { sendForgotPasswordEmail, sendVerificationEmail } from "../utils/emails.js";
import otpGenerator from "otp-generator";
import jwt from "jsonwebtoken";
const authRouter = Router();
// Signup endpoint
authRouter.post("/signup", async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({ error: "All fields are required", message: "" });
        }
        console.log(fullName, email, password);
        const isExists = await userModel.findOne({ email });
        if (isExists) {
            return res.status(400).json({ error: "User already exists", message: "" });
        }
        const newUser = await userModel.create({ fullName, email, password });
        const otp = otpGenerator.generate(6);
        newUser.verificationOtp = otp;
        await newUser.save();
        let { data, error } = await sendVerificationEmail(newUser.email, otp);
        if (error) {
            return res.status(500).json({ error: error.message, message: "Something went wrong" });
        }
        console.log(data);
        return res.status(201).json({ error: "", message: "User created successfully, check the verification email" });
    }
    catch (error) {
        let e = error;
        res.status(500).json({ error: e.message, message: "Something went wrong" });
    }
});
// Signin endpoint
authRouter.post("/signin", async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        if (!user.isVerified) {
            return res.status(400).json({ message: "Please verify your email first" });
        }
        let isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        let { accessToken, refreshToken } = signJWT(user._id.toString());
        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, sameSite: "none", maxAge: 1000 * 60 * 15 });
        return res.status(200).json({ message: "Signin successful", accessToken });
    }
    catch (error) {
        let e = error;
        res.status(500).json({ error: e.message, message: "Something went wrong" });
    }
});
// Otp verificaiton
authRouter.post("/verify-otp", async (req, res) => {
    try {
        let { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ message: "All fields are required" });
        }
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        if (user.verificationOtp !== otp) {
            return res.status(400).json({ message: "Invalid otp" });
        }
        user.isVerified = true;
        user.verificationOtp = "";
        await user.save();
        let { accessToken, refreshToken } = signJWT(user._id.toString());
        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, sameSite: "none", maxAge: 1000 * 60 * 15 });
        return res.status(200).json({ message: "Otp verified successfully", accessToken });
    }
    catch (error) {
        let e = error;
        res.status(500).json({ error: e.message, message: "Something went wrong" });
    }
});
// Forgot Password
authRouter.post("/forgot-password", async (req, res) => {
    let { email } = req.body;
    try {
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        let user = await userModel.findOne({ email });
        if (!user || !user.isVerified) {
            return res.status(400).json({ message: "User not found" });
        }
        let otp = otpGenerator.generate(6);
        user.verificationOtp = otp;
        await user.save();
        let { data, error } = await sendForgotPasswordEmail(email, otp);
        if (error) {
            return res.status(500).json({ error: error.message, message: "Something went wrong" });
        }
        return res.status(200).json({ message: "Otp sent successfully" });
    }
    catch (error) {
        let e = error;
        res.status(500).json({ error: e.message, message: "Something went wrong" });
    }
});
// Reset Password
authRouter.post("/reset-password", async (req, res) => {
    let { email, otp, password } = req.body;
    try {
        if (!email || !otp || !password) {
            return res.status(400).json({ message: "All fields required" });
        }
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not fount" });
        }
        if (user.verificationOtp !== otp) {
            return res.status(400).json({ message: "Invalid otp" });
        }
        user.password = password;
        user.verificationOtp = "";
        await user.save();
        return res.status(200).json({ message: "Password reset successfully" });
    }
    catch (error) {
        let e = error;
        res.status(500).json({ error: e.message, message: "Something went wrong" });
    }
});
// Refresh Token
authRouter.post('/refresh', async (req, res) => {
    const headerToken = req.headers.authorization?.split(' ')[1];
    if (!headerToken)
        return res.status(401).json({ message: "No refresh token" });
    const refreshSecret = process.env.REFRESH_TOKEN_SECRET || 'default_refresh_secret';
    const accessSecret = process.env.ACCESS_TOKEN_SECRET || 'default_secret';
    jwt.verify(headerToken, accessSecret, (err, decoded) => {
        if (err)
            return res.status(403).json({ message: "Invalid refresh token" });
        const { accessToken } = signJWT(decoded.id);
        res.json({ accessToken });
    });
});
export default authRouter;
//# sourceMappingURL=auth.route.js.map