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

export const generateOTPTemplate = (otp) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Geom:ital,wght@0,300..900;1,300..900&display=swap');
            body {
                font-family: 'Geom', Arial, sans-serif;
                background-color: #000000;
                color: #ffffff;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
                background-color: #000000;
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #16a34a; /* green-600 */
                text-decoration: none;
            }
            .content {
                background-color: #111111;
                border: 1px solid #22c55e; /* green-500 */
                border-radius: 8px;
                padding: 30px;
                text-align: center;
            }
            h1 {
                font-size: 24px;
                margin-bottom: 20px;
                color: #ffffff;
            }
            p {
                font-size: 16px;
                line-height: 1.5;
                color: #cccccc;
                margin-bottom: 20px;
            }
            .otp-container {
                background-color: #000000;
                border: 2px dashed #16a34a;
                border-radius: 8px;
                padding: 20px;
                margin: 30px 0;
            }
            .otp-code {
                font-size: 36px;
                font-weight: bold;
                letter-spacing: 8px;
                color: #22c55e;
                margin: 0;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 14px;
                color: #666666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <span class="logo">ResuCraft</span>
            </div>
            <div class="content">
                <h1>Verification Code</h1>
                <p>Please use the following One-Time Password (OTP) to complete your verification process. This code is valid for a limited time.</p>
                <div class="otp-container">
                    <p class="otp-code">${otp}</p>
                </div>
                <p>If you didn't request this code, please ignore this email.</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} ResuCraft. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
};
