import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import "dotenv/config";

neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL.replace(/^['"]|['"]$/g, '').trim();
console.log("URL:", connectionString);

const pool = new Pool({ connectionString });
pool.query('SELECT 1 as result')
  .then(res => {
      console.log(res.rows);
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });
