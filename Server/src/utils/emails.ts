import { Resend } from "resend";
const resend = new Resend("re_8xdXGnxR_KN1nNbMRsgut9KGqQUT1KuK1");

export async function sendVerificationEmail(email: string, otp: string) {
  const { data, error } = await resend.emails.send({
    from: "ResuCraft <onboarding@resend.dev>",
    to: [email],
    subject: "Verificaiton Email",
    html: `<strong>${otp}</strong>`,
  });

  return { data, error };
}

export async function sendForgotPasswordEmail(email: string, otp: string) {
  const { data, error } = await resend.emails.send({
    from: "ResuCraft <onboarding@resend.dev>",
    to: [email],
    subject: "Forgot Password",
    html: `<strong>${otp}</strong>`,
  })

  return { data, error };
}