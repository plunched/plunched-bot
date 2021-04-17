import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class pingCommand extends Command {
  public constructor() {
    super("pingCommand", {
      aliases: ["ping"],
      category: "info",
      description: {
        content: "Check the latency of the bot",
        usage: "ping",
        examples: ["ping"],
      },
      ratelimit: 3,
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(`pong! \`${this.client.ws.ping}ms\``);
  }
}
