import { Command } from "discord-akairo";
import { Message } from "discord.js";

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
        content: "Gives you the link to invite the bot.",
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
