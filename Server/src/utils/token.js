import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateToken = (payload, expiresIn = "7d") => {
    return jwt.sign(payload, config.jwt_secret, { expiresIn });
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, config.jwt_secret);
    } catch (error) {
        return null;
    }
};
