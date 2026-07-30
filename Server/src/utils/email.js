import nodemailer from "nodemailer";
import config from "../config/config.js";

const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.port == 465, // true for 465, false for other ports
    auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log('Email service error:', error);
    } else {
        console.log('Email service is ready to send messages');
    }
});

export const sendEmail = async ({ to, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: config.smtp.from,
            to,
            subject,
            html,
        });
        console.log("Email sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Could not send email.");
    }
};
