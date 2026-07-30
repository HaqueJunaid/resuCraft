import "dotenv/config";
import config from "./config/config.js";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello from ResuCraft server");
})

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
})