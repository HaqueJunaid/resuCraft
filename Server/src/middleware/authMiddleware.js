import { verifyToken } from "../utils/token.js";
import prisma from "../config/prisma.js";

export const authenticateUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
        }

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, email: true, name: true, isVerified: true }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
