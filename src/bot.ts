import { token, owners } from "./config";
import BotClient from "./client/Botclient";

const client: BotClient = new BotClient({ token, owners });
client.start();
