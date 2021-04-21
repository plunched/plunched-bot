import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ms = require("ms");

export default class botInfoCommand extends Command {
  constructor() {
    super("botVote", {
      aliases: ["botVote", "bot-vote", "vote"],
      category: "information",
      description: {
        content: "returns the link to invite the bot",
        usage: "botVote",
        examples: ["botVote", "vote"],
      },
      ratelimit: 3,
    });
  }

  public exec(message: Message) {
    message.util.send(
      `**Vote for Plunched bot**
https://discordbotlist.com/bots/plunched-bot/upvote`
    );
  }
}
