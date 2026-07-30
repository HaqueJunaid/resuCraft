import { defineConfig, env } from "prisma/config";
import db from "./src/config/config.js"

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: db.db_url,
  },
});
