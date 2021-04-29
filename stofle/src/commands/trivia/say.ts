import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class sayCommand extends Command {
  constructor() {
    super("say", {
      aliases: ["say", "tellMe"],
      category: "trivia",
      description: {
        content: "Says a message you ask it.",
        usage: "8ball <question>",
        examples: ["8ball am I cool?"],
      },
      args: [
        {
          id: "messageToSay",
          type: "messageToSay",
          match: "rest",
        },
      ],
      ratelimit: 3,
    });
  }

  public exec(
    message: Message,
    { messageToSay }: { messageToSay: string }
  ): Promise<Message> {
    return message.util.reply(messageToSay);
  }
}
