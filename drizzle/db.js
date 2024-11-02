const { neon } = require("@neondatabase/serverless");
const { drizzle } = require("drizzle-orm/neon-http");
const { config } = require("dotenv");

config({ path: ".env" });

// const sql = neon("postgresql://neondb_owner:AhXwmb0t1Rno@ep-green-dust-a59awfti.us-east-2.aws.neon.tech/neondb?sslmode=require");
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle({ client: sql });
