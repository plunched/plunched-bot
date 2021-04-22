import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import guild from "../../client/guilds";

export default class pingCommand extends Command {
  constructor() {
    super("pingCommand", {
      aliases: ["ping"],
      category: "information",
      description: {
        content: "Check the latency of the bot",
        usage: "ping",
        examples: ["ping"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message): Promise<Message> {
    const pingMessage = message.util.send(
      `<a:discord_loading:809731356057141258> finding ping`
    );

    const preDate = Date.now();
    await guild.fetch(message.guild.id, message.guild.name, message.author.id);
    const dbPing = Date.now() - preDate;

    return (await pingMessage).edit(
      "",
      new MessageEmbed()
        .setAuthor(
          message.member.user.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .addFields(
          {
            name: "api latency:",
            value: `\`${this.client.ws.ping}ms\``,
          },
          {
            name: "database latency:",
            value: `\`${dbPing}ms\``,
          },
          {
            name: "\u200b",
            value:
              "[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)",
          }
        )
        .setColor("738adb")
        .setTimestamp()
        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
    );
  }
}
