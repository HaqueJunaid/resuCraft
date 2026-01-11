export declare function sendVerificationEmail(email: string, otp: string): Promise<{
    data: import("resend").CreateEmailResponseSuccess | null;
    error: import("resend").ErrorResponse | null;
}>;
export declare function sendForgotPasswordEmail(email: string, otp: string): Promise<{
    data: import("resend").CreateEmailResponseSuccess | null;
    error: import("resend").ErrorResponse | null;
}>;
//# sourceMappingURL=emails.d.ts.map