import { pool } from "../db";
const client = require("../config");

export default class Guilds {
  static async fetch(target: string, targetName: string, targetUSER) {
    if (!target) console.error("missing target");
    if (!targetName) console.error("missing targetName");
    if (!targetUSER) console.error("missing TargetUserID");

    await pool.query(
      "INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING",
      [target, targetName, client.prefix, 0]
    );
    await pool.query(
      "INSERT INTO users (userID, cash, bank) VALUES($1, $2, $2) ON CONFLICT DO NOTHING",
      [targetUSER, 0]
    );

    let guildSettings = await pool.query(
      "SELECT * FROM guilds WHERE guildID = $1;",
      [target]
    );

    if (!guildSettings) return false;
    return guildSettings;
  }
}
