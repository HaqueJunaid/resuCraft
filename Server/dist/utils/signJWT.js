import jwt from "jsonwebtoken";
export const signJWT = (payload) => {
    return jwt.sign({ id: payload }, process.env.JWT_SECRET || 'default_secret', { expiresIn: 60 * 60 * 24 * 7 });
};
//# sourceMappingURL=signJWT.js.map