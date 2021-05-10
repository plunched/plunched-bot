import { token, owners, colors } from "./config";
import BotClient from "./client/Botclient";
import { pool } from "./db";

const client: BotClient = new BotClient({ token, owners });

let retries = 5;
const dbconnect = async () => {
  while (retries)
    try {
      pool.connect();
      break;
    } catch (err) {
      console.error(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 1e3));
    } console.log("connect to the db!")
};

dbconnect();
client.start();
