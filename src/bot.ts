import { token, owners, colors } from "./config";
import BotClient from "./client/Botclient";
import { pool } from "./db";

const client: BotClient = new BotClient({ token, owners });
client.start();

const db = async () => {
  const db = await pool.query("SELECT * FROM guilds LIMIT 10");
  if (db) return console.log("connected to postgresql");
  console.error("Failed to connect ot postgres db!")
};

db();
