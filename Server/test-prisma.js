import prisma from "./src/config/prisma.js";

async function main() {
    try {
        console.log("Connecting...");
        const users = await prisma.user.findMany();
        console.log("Users:", users.length);
        process.exit(0);
    } catch (e) {
        console.error("Prisma query failed:", e);
        process.exit(1);
    }
}

main();
