import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { pool } from "../../db";

export default class depositCommand extends Command {
  constructor() {
    super("deposit", {
      aliases: ["deposit", "dep", "depo"],

    });
  }
}
