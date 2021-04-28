import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: "plunched-bot",
  host: "localhost",
  port: 5432,
  database: "plunched_bot",
});
