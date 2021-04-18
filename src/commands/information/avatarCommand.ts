import { Command } from "discord-akairo";
import { Message, GuildMember, MessageEmbed, ImageSize } from "discord.js";

export default class AvatarCommand extends Command {
  constructor() {
    super("avatar", {
      aliases: ["avatar", "av"],
      category: "information",
      description: {
        content: "display the avatar of a member",
        usage: "avatar <member> <size>",
        examples: [
          "avatar",
          "avatar @user#0001",
          "avatar user -size=32",
          "avatar 531953738491887627 -size=128",
        ],
      },
      ratelimit: 3,
      args: [
        {
          id: "member",
          type: "member",
          match: "rest",
          default: (msg: Message) => msg.member,
        },
        {
          id: "size",
          type: (_: Message, str: string): null | number => {
            if (
              str ||
              (isNaN(Number(str)) &&
                [16, 32, 64, 128, 256, 1024, 2048].includes(Number(str)))
            )
              return Number(str);
            return null;
          },
          match: "option",
          flag: ["-size="],
          default: 2048,
        },
      ],
    });
  }

  public exec(
    message: Message,
    { member, size }: { member: GuildMember; size: number }
  ): Promise<Message> {
    return message.util.send(
      new MessageEmbed()
        .setTitle(`Avatar ${member.user.tag}`)
        .setColor("RANDOM")
        .setImage(member.user.displayAvatarURL({ size: size as ImageSize }))
    );
  }
}
