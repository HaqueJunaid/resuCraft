import redis from "../config/redis.js";

const rateLimiter = async (req, res, next) => {
    const ip = req.ip || req.header["x-forwarded-for"] || "anonymous";

    const redisKey = `rate:global:${ip}`;
    const LIMIT = 5;
    const WINDOW_SIZE_IN_SECONDS = 60;

    try {
        const currentRequest = await redis.incr(redisKey);

        if (currentRequest === 1) {
            await redis.expire(redisKey, WINDOW_SIZE_IN_SECONDS);
        }

        if (currentRequest > LIMIT) {
            const ttl = redis.ttl(redisKey);
            return res.status(429).send({ error: "Too many requests from this IP. Please try again after some time" });
        }

        next();
    } catch (error) {
        console.error('Global rate limiter tracking error:', error);
        next();
    }
}

export default rateLimiter;