import { Command } from "discord-akairo";
import { Message } from "discord.js";

let replies = [
  "yes, ofc.",
  "no clue.",
  "IDK.",
  "possibly.",
  "clearly not.",
  "yes clearly",
  "definitely not.",
  "why not.",
  "yes but why?",
  "never gonna happen.",
  "hell no.",
];
let number = Math.floor(Math.random() * replies.length);
let answer = ":8ball: " + replies[number];

export default class _8ballCommand extends Command {
  constructor() {
    super("8ball", {
      aliases: ["8ball", "question"],
      category: "trivia",
      description: {
        content: "answers a question you ask it.",
        usage: "8ball <question>",
        examples: ["8ball am I cool?"],
      },
      ratelimit: 3,
    });
  }
  public exec(message: Message): Promise<Message> {
    return message.reply(`${answer}`);
  }
}
