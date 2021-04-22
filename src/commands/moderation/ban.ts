import { Command } from "discord-akairo";
import { TeamMember } from "discord.js";
import { Message, GuildMember, MessageEmbed } from "discord.js";

export default class banCommand extends Command {
  constructor() {
    super("ban", {
      aliases: ["ban", "b"],
      category: "moderation",
      description: {
        content: "bans a given user",
        usage: "ban <user> <reason>",
        examples: [
          "ban @user",
          "ban user#0001 spamming NSFW",
          "ban userID spamming NSFW",
        ],
      },
      args: [
        {
          id: "member",
          type: "member",
          match: "rest",
          prompt: {
            start: (msg: Message) =>
              `${msg.author} Please provide a member to ban.`,
            retry: (msg: Message) =>
              `${msg.author} Please provide a valid member to ban.`,
          },
        },
        {
          id: "reason",
          type: "string",
          match: "rest",
          default: "No reason provided",
        },
      ],
    });
  }

  public exec(
    message: Message,
    { member, reason }: { member: GuildMember; reason: string }
  ): Promise<Message> {
    if (
      member.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.util.send(`This member has a higher role then you!`);
  }
}
