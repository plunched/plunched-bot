import { Listener, Command } from "discord-akairo";
import { Message } from "discord.js";
import { pool } from "../../db";

export default class finnishListeners extends Listener {
  constructor() {
    super("finnishListener", {
      emitter: "commandHandler",
      event: "commandFinished",
      category: "commandListener",
    });
  }

  public async exec(message: Message): Promise<void> {
    pool.query(`
      UPDATE guilds
      SET totalCommands = totalCommands + 1
      WHERE guildID = ${message.guild.id}`);
  }
}
