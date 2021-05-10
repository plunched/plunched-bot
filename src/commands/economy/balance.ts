import { Command } from "discord-akairo";
import { Message, MessageEmbed, GuildMember } from "discord.js";
import { pool } from "../../db";

export default class balanceCommand extends Command {
  constructor() {
    super("balance", {
      aliases: ["balance", "bal"],
      category: "economy",
      description: {
        content: "Tells you how much money you have",
        usage: "balance <user>",
        examples: ["bal", "bal @user#0001", "balance userID"],
      },
      args: [
        {
          id: "member",
          type: "member",
          match: "rest",
          default: (msg: Message) => msg.member,
        },
      ],
    });
  }

  public async exec(
    message: Message,
    { member }: { member: GuildMember }
  ): Promise<Message> {
    await pool.query(
      "INSERT INTO users (userID, job) VALUES($1, $2) ON CONFLICT DO NOTHING",
      [member.id, "garbage-collector"]
    );

    let user = await pool.query("SELECT * FROM users WHERE userID = $1", [
      member.id,
    ]);

    return message.util.send(
      new MessageEmbed()
        .setTitle(`${member.user.username}'s balance`)
        .setDescription(
          `**cash:** ${this.client.emotes.coin}${user.rows[0].cash}
    **bank**: ${this.client.emotes.coin}${user.rows[0].bank}`
        )
        .setColor(this.client.colors.default)
        .setTimestamp()
        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
        .setColor(this.client.colors.default)
    );
  }
}
