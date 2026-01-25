import jwt from "jsonwebtoken";

export const signJWT = (payload: string) => {
    const accessToken = jwt.sign({ id: payload }, process.env.ACCESS_TOKEN_SECRET || 'default_secret', { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: payload }, process.env.REFRESH_TOKEN_SECRET || 'default_refresh_secret', { expiresIn: '30d' });
    return { accessToken, refreshToken };
}