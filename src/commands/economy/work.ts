import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { pool } from "../../db";

export default class WorkCommand extends Command {
  constructor() {
    super("work", {
      aliases: ["work"],
      category: "economy",
      description: {
        content: "Gives you money for you to work",
      },
    });
  }

  async exec(message: Message): Promise<Message> {
    const randomCoins = Math.floor(Math.random() * 300) + 100;

    await pool.query(
      "INSERT INTO users (userID) VALUES($1) ON CONFLICT DO NOTHING",
      [message.author.id]
    );
    message.util.send("yes");

    let user = await pool.query("SELECT * FROM users WHERE userID = $1", [
      message.author.id,
    ]);
    user = user.rows[0];

    console.log(user);
    return message.util.send("You worked");
  }
}
