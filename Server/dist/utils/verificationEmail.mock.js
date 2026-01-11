export const sendVerificaitonEmail = async (userEmail) => {
    console.log(`📧 Mock email sent to: ${userEmail}`);
    console.log(`📧 Subject: Verify your email`);
    console.log(`📧 Content: <h1>Verify your email</h1>`);
    return { data: { id: 'mock-email-id' }, error: null };
};
//# sourceMappingURL=verificationEmail.mock.js.map