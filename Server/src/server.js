import "dotenv/config";
import config from "./config/config.js";
import express from "express";
import cookieParser from "cookie-parser";
import rateLimiter from "./middleware/globalRateLimiter.js";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}))
app.set('trust proxy', 1);
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
    res.send("Hello from ResuCraft server");
})

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
})