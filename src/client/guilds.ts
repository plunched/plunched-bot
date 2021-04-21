import { pool } from "../db";
const client = require("../config");

export default class Guilds {
  static async fetch(target: string, targetName: string) {
    if (!target) console.error("missing target");
    if (!targetName) console.error("missing targetName");

    await pool.query(
      "INSERT INTO guilds (guildID, guildName, prefixes, modulesID) VALUES($1, $2, $3, $1) ON CONFLICT DO NOTHING",
      [target, targetName, client.prefix]
    );
    let guildSettings = await pool.query(
      "SELECT * FROM guilds WHERE guildID = $1;",
      [target]
    );
    guildSettings = guildSettings.rows[0];
    if (!targetName == guildSettings.guildName) {
      await pool.query(
        "INSERT INTO GUILDS (guildsName) VALUES($1) WHERE guildID = $2 ON CONFLICT DO NOTHING",
        [targetName, targetName]
      );

      if (!guildSettings) return false;
    }

    return guildSettings;
  }
}
