import jwt from "jsonwebtoken";

export const signJWT = (payload: string) => {
    return jwt.sign({ id: payload }, process.env.JWT_SECRET || 'default_secret', { expiresIn: 60 * 60 * 24 * 7 });
}