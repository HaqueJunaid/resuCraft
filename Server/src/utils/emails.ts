import { Resend } from "resend";
const resend = new Resend("re_8xdXGnxR_KN1nNbMRsgut9KGqQUT1KuK1");

export async function sendVerificationEmail(email: string, otp: string) {
  const { data, error } = await resend.emails.send({
    from: "ResuCraft <onboarding@resend.dev>",
    to: [email],
    subject: "Verificaiton Email",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email Address</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header {
            background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 600;
            margin: 0;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
        }
        .greeting strong {
            font-weight: 600;
        }
        .message {
            font-size: 14px;
            color: #555;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .otp-section {
            background-color: #f9f9f9;
            border: 2px solid #0066cc;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
        }
        .otp-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
            display: block;
        }
        .otp-code {
            font-size: 36px;
            font-weight: 700;
            color: #0066cc;
            letter-spacing: 6px;
            font-family: 'Monaco', 'Courier New', monospace;
            margin: 0;
        }
        .otp-expiry {
            font-size: 12px;
            color: #999;
            margin-top: 12px;
        }
        .instructions {
            background-color: #f0f7ff;
            border-left: 4px solid #0066cc;
            padding: 16px;
            margin: 30px 0;
            border-radius: 4px;
        }
        .instructions p {
            font-size: 14px;
            color: #333;
            margin: 8px 0;
            list-style: none;
        }
        .instructions strong {
            color: #0066cc;
            font-weight: 600;
        }
        .footer {
            border-top: 1px solid #e0e0e0;
            padding: 20px 30px;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .footer a {
            color: #0066cc;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
        .security-note {
            background-color: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 12px;
            margin-top: 20px;
            font-size: 12px;
            color: #856404;
        }
        .security-note strong {
            color: #333;
        }
        @media (max-width: 600px) {
            .container {
                width: 100%;
            }
            .content {
                padding: 20px;
            }
            .otp-code {
                font-size: 28px;
                letter-spacing: 4px;
            }
            .header h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Verify Your Email</h1>
        </div>

        <!-- Content -->
        <div class="content">
            <p class="greeting">Hi <strong>there</strong>,</p>

            <p class="message">
                Thank you for signing up with us! To complete your email verification and secure your account, please use the code below.
            </p>

            <!-- OTP Section -->
            <div class="otp-section">
                <span class="otp-label">Your Verification Code</span>
                <p class="otp-code">${otp}</p>
                <p class="otp-expiry">⏱️ Expires in 10 minutes</p>
            </div>

            <!-- Instructions -->
            <div class="instructions">
                <p><strong>How to use this code:</strong></p>
                <p>1. Return to the verification page on our website</p>
                <p>2. Enter the code above: <strong>${otp}</strong></p>
                <p>3. Your email will be verified immediately</p>
            </div>

            <!-- Security Note -->
            <div class="security-note">
                <strong>🔒 Security Note:</strong> Never share this code with anyone. We will never ask for this code via email or phone.
            </div>

            <p class="message" style="margin-top: 30px;">
                If you didn't request this code, you can ignore this email or <a href="#" style="color: #0066cc; text-decoration: none;">click here to report suspicious activity</a>.
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2026 Your Company Name. All rights reserved.</p>
            <p>
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a> | 
                <a href="#">Contact Support</a>
            </p>
            <p>You're receiving this email because you signed up for an account.</p>
        </div>
    </div>
</body>
</html>
`,
  });

  return { data, error };
}

export async function sendForgotPasswordEmail(email: string, otp: string) {
  const { data, error } = await resend.emails.send({
    from: "ResuCraft <onboarding@resend.dev>",
    to: [email],
    subject: "Forgot Password",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 12px;
        }
        .header {
            text-align: center;
        }
        .header h1 {
            font-size: 24px;
            font-weight: 600;
            color: #0066cc;
            margin-bottom: 10px;
        }
        .content {
            padding: 20px;
        }
        .greeting {
            font-size: 16px;
            color: #333;
            margin-bottom: 20px;
        }
        .greeting strong {
            font-weight: 600;
        }
        .message {
            font-size: 14px;
            color: #555;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .otp-section {
            background-color: #f0f7ff;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            margin: 30px 0;
        }
        .otp-label {
            font-size: 14px;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
            display: block;
        }
        .otp-code {
            font-size: 24px;
            font-weight: 600;
            color: #0066cc;
            letter-spacing: 6px;
            margin: 0;
        }
        .otp-expiry {
            font-size: 12px;
            color: #999;
            margin-top: 12px;
        }
        .instructions {
            padding: 16px;
            margin: 30px 0;
        }
        .instructions p {
            font-size: 14px;
            color: #333;
            margin: 8px 0;
            list-style: none;
        }
        .instructions strong {
            color: #0066cc;
            font-weight: 600;
        }
        .security-note {
            background-color: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 4px;
            padding: 12px;
            margin-top: 20px;
            font-size: 12px;
            color: #856404;
        }
        .security-note strong {
            color: #333;
        }
        .footer {
            padding: 16px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .footer a {
            color: #0066cc;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Reset Your Password</h1>
        </div>

        <!-- Content -->
        <div class="content">
            <p class="greeting">Hi <strong>there</strong>,</p>

            <p class="message">
                We received a request to reset your password. To proceed, please use the code below.
            </p>

            <!-- OTP Section -->
            <div class="otp-section">
                <span class="otp-label">Your Reset Code</span>
                <p class="otp-code">${otp}</p>
                <p class="otp-expiry">⏱️ Expires in 10 minutes</p>
            </div>

            <!-- Instructions -->
            <div class="instructions">
                <p><strong>How to use this code:</strong></p>
                <p>1. Return to the password reset page on our website</p>
                <p>2. Enter the code above: <strong>${otp}</strong></p>
                <p>3. Your password will be reset immediately</p>
            </div>

            <!-- Security Note -->
            <div class="security-note">
                <strong>🔒 Security Note:</strong> Never share this code with anyone. We will never ask for this code via email or phone.
            </div>

            <p class="message" style="margin-top: 30px;">
                If you didn't request this code, you can ignore this email or <a href="#" style="color: #0066cc; text-decoration: none;">click here to report suspicious activity</a>.
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2026 Your Company Name. All rights reserved.</p>
            <p>
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a> | 
                <a href="#">Contact Support</a>
            </p>
            <p>You're receiving this email because you signed up for an account.</p>
        </div>
    </div>
</body>
</html>`
  })

  return { data, error };
}