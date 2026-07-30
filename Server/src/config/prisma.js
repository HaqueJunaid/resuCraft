import { PrismaClient } from "@prisma/client";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";
import "dotenv/config";

neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL?.replace(/^['"]|['"]$/g, '').trim();

if (!connectionString) {
    throw new Error("DATABASE_URL is not defined in the environment.");
}

const adapter = new PrismaNeon({ connectionString });

const prisma = new PrismaClient({ adapter });

export default prisma;
