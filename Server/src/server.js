import "dotenv/config";
import config from "./config/config.js";
import express from "express";
import cookieParser from "cookie-parser";
import rateLimiter from "./middleware/globalRateLimiter.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.set('trust proxy', 1);
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello from ResuCraft server");
})

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
})