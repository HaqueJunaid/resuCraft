import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_SECRET);
export const sendVerificaitonEmail = async (userEmail) => {
    const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: userEmail,
        subject: "Verify your email",
        html: "<h1>Verify your email</h1>"
    });
    return { data, error };
};
//# sourceMappingURL=verificationEmail.js.map