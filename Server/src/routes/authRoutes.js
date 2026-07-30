import express from "express";
import { register, verifyOTP, login, forgotPassword } from "../controller/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verifyOTP);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

export default router;
