import 'dotenv/config';
import express from "express";
import connectDB from './config/db.js';
import authRouter from './routes/auth.route.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Main API routes
app.use("/api/auth", authRouter);
// Starter function
async function startServer() {
    await connectDB();
    app.listen(port);
    console.log(`Server running at http://localhost:${port}`);
}
startServer();
//# sourceMappingURL=index.js.map