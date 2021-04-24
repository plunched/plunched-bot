import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class helpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help", "commands", "cmds"],
      category: "information",
      description: {
        content: "Helps you out with any command",
        usage: "help <command | sub-module>",
        examples: ["links", "help ping"],
      },
      ratelimit: 3,
      args: [
        {
          id: "command",
          type: "commandAlias",
        },
      ],
    });
  }

  public exec(
    message: Message,
    { command }: { command: Command }
  ): Promise<Message> {
    if (command)
      return message.util.send(
        new MessageEmbed()
          .setTitle(`Help ${command}`)
          .setDescription(
            `\n${command.description.content || "No description provided."}

      **usage:**\n\`${command.description.usage || "No usage provide."}\`

      **examples:**\n\`${
        command.description.examples
          ? command.description.examples.map((e) => `${e}`).join("\n")
          : "No examples provided."
      }\``
          )
          .setColor(this.client.colors.default)
      );

    return message.util.send(
      new MessageEmbed()
        .setTitle("Help")
        .setDescription(
          `**usage:**\n\`${message.util.parsed.prefix}${this.description.usage}\``
        )
        .addFields(
          {
            name: "moderation",
            value: `moderation commands are used to 'correct' members of a server.`,
            inline: true,
          },
          {
            name: "auto-mod",
            value: `auto-moderation commands are used to automate moderation.`,
            inline: true,
          },
          {
            name: "info",
            value: `info commands are used to get information about anything.`,
            inline: true,
          },
          {
            name: "economy",
            value: `economy commands are used to gain coins and items.`,
            inline: true,
          },
          {
            name: "trivia/fun",
            value: `trivia commands are used to do thing things which amuses people.`,
            inline: true,
          },
          {
            name: "config",
            value: `config commands are used to set up bot settings for this server.`,
            inline: true,
          },
          {
            name: "\u200b",
            value:
              "[support server](https://discord.gg/pdqxpzavpy) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)",
          }
        )
    );

    return message.util.send(
      new MessageEmbed()
        .setTitle(`No command found`)
        .setDescription(
          `${this.client.emotes.error} Could not find the command \`${command}\``
        )
        .setColor(this.client.colors.default)
    );
  }
}
