import { token, owners } from "./config";
import BotClient from "./client/Botclient";
import { pool } from "./db";

const client: BotClient = new BotClient({ token, owners });
client.start();

const db = async () => {
  const db = await pool.query("SELECT * FROM guilds LIMIT 10");
  if (db) console.log("connected to postgresql");
};

db();
