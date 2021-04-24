import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ms = require("ms");
export default class upTimeCommand extends Command {
  constructor() {
    super("upTimeCommand", {
      aliases: ["uptime"],
      category: "information",
      description: {
        content: "Tells you the uptime of a the bot so far.",
        usage: "uptime",
        examples: ["uptime", ""],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message): Promise<Message> {
    return message.util.send(
      new MessageEmbed()
        .setColor(this.client.colors.default)
        .setTitle(`My uptime:`)
        .setDescription(`${ms(this.client.uptime)}`)
        .setColor(this.client.colors.default)
        .setTimestamp()
        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
    );
  }
}
