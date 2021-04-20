import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ms = require("ms");

export default class botInfoCommand extends Command {
  constructor() {
    super("botinfo", {
      aliases: ["botinfo", "bot-info", "info"],
      category: "information",
      description: {
        content: "returns info about the bot",
        usage: "botinfo",
        examples: ["botinfo", "info"],
      },
      ratelimit: 3,
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(
      new MessageEmbed()
      .setAuthor(
          message.member.user.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle("Plunched-bot's info")
        .setDescription("This bot was developed by <@531953738491887627>")
        .setColor(this.client.colors.default)
        .addFields(
          {
            name: `servers:`,
            value: this.client.guilds.cache.size,
            inline: true,
          },
          {
            name: "Members:",
            value: this.client.users.cache.size,
            inline: true,
          },
          {
            name: "channels:",
            value: this.client.channels.cache.size,
            inline: true,
          },
          {
            name: "Api ping:",
            value: `${this.client.ws.ping}ms`,
            inline: true,
          },
          {
            name: `Join date:`,
            value: message.guild.joinedAt.toDateString(),
            inline: true,
          },
          {
            name: "Uptime",
            value: `${ms(this.client.uptime)}`,
            inline: true,
          },
          {
            name: "\u200b",
            value:
              "[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)",
          }
        )
        .setTimestamp()
        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
    );
  }
}
