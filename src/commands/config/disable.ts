import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class disableCommand extends Command {
  constructor() {
    super("disable", {
      aliases: ["disable", "prohibit"],
      category: "config",
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send("coming soon");
  }
}
