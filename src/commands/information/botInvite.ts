import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class botInviteCommand extends Command {
  constructor() {
    super("botInvite", {
      aliases: [
        "botInvite",
        "bot-invite",
        "invite",
        "support",
        "support-server",
      ],
      category: "information",
      description: {
        content: "returns invite of the bot",
        usage: "botInvite",
        examples: ["bot-invite", "invite"],
      },
      ratelimit: 3,
    });
  }

  public exec(message: Message) {
    message.util.send(
      `__**Add me to your server**__
 https://dsc.gg/plunched-bot
 __**Join our support server**__
 https://dsc.gg/plunched-help`
    );
  }
}
