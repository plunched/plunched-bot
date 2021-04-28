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
    await pool.query(
      "INSERT INTO users (userID, job) VALUES($1, $2) ON CONFLICT DO NOTHING",
      [message.author.id, "garbage-collecter"]
    );

    let user = await pool.query("SELECT * FROM users WHERE userID = $1", [
      message.author.id,
    ]);
    if (message.author.id != this.client.ownerID) {
      if (user.rows[0].premiumacc) {
        if (Date.now() - user.rows[0].lastworkcommand < 3e6)
          return message.util.send("Take the chill pill");
      }
      if (Date.now() - user.rows[0].lastworkcommand < 6e6)
        return message.util.send("Take the chill pill");
    }

    let randomCoins = 0;
    if (user.rows[0].job == "garbage-collecter") {
      randomCoins = Math.floor(Math.random() * 300) + 100;
    }

    await pool.query(
      `UPDATE users
    SET cash = cash + $1
    WHERE userID = $2`,
      [randomCoins, message.author.id]
    );

    return message.util.send(
      `You've got ${randomCoins}${this.client.emotes.coin} for you job as \`${user.rows[0].job}\``
    );
  }
}
