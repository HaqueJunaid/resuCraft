import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT || 4000,
    client_origin: process.env.CLIENT_ORIGIN,
    db_url: process.env.DATABASE_URL,
    jwt_secret: process.env.JWT_SECRET || "default_secret",
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        from: process.env.SMTP_FROM || "noreply@resucraft.com",
    },
    redis: {
        url: process.env.REDIS_URL
    }
}

export default config;