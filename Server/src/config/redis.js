import Redis from "ioredis";
import config from "./config.js";

const redis = new Redis(config.redis.url);

redis.on("connect", () => console.log("Redis connected"));
redis.on("error", (error) => console.log("Redis Error: " + error));

export  default redis;