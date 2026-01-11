import { Resend } from "resend";
const resend = new Resend("re_8xdXGnxR_KN1nNbMRsgut9KGqQUT1KuK1");
export async function sendEmail(email, otp) {
    const { data, error } = await resend.emails.send({
        from: "ResuCraft <onboarding@resend.dev>",
        to: [email],
        subject: "Verificaiton Email",
        html: `<strong>${otp}</strong>`,
    });
    return { data, error };
}
//# sourceMappingURL=sendVerificationEmial.js.map