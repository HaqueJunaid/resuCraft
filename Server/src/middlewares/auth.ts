import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // @ts-ignore
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || 'default_secret');
        // @ts-ignore
        req.user = decodedToken;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}