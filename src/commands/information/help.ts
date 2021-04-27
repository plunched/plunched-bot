import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class helpCommand extends Command {
  constructor() {
    super("help", {
      aliases: ["help", "commands", "cmds"],
      category: "information",
      description: {
        content: "Helps you out with any command",
        usage: "help <command>",
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
    if (command) {
      let commandEmbed = new MessageEmbed()
        .setTitle(`Help ${command}`)
        .setColor(this.client.colors.default)
        .addField(
          "Usage:",
          `\`${command.description.usage || "No usage provide."}\``
        );

      if (command.description.examples) {
        commandEmbed.addField(
          "Examples:",
          `\`${
            command.description.examples
              ? command.description.examples.map((e) => `${e}`).join("\n")
              : "no examples provided."
          }\``
        );
      }

      commandEmbed.addField(
        "Aliases:",
        `\`${
          command.aliases
            ? command.aliases.map((e) => `${e}`).join(", ")
            : "no examples provided."
        }\``
      );

      if (command.description.Permissions) {
        commandEmbed.addField(
          "Permissions:",
          `${command.description.Permissions}`
        );
      }

      commandEmbed.addField(
        "\u200b",
        `[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)`
      );

      return message.util.send(commandEmbed);
    }

    const embed = new MessageEmbed()
      .setAuthor(
        message.member.user.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle("Help command.")
      .setDescription(
        `**usage:** \`${message.util.parsed.prefix}${this.description.usage}\``
      )
      .setColor(this.client.colors.default)
      .setTimestamp()
      .setFooter(this.client.user.tag, this.client.user.displayAvatarURL());

    for (const category of this.handler.categories.values()) {
      if (["default"].includes(category.id)) continue;

      embed.addField(
        category.id,
        category
          .filter((cmd) => cmd.aliases.length > 0)
          .map((cmd) => `\`${cmd}\``)
          .join(", " || "No commands in category.")
      );
    }

    embed.addField("\u200b",
        `[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)`
      )

    return message.channel.send(embed);
  }
}
