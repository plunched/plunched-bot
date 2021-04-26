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
      if (!command.description.content)
        return message.util.send(
          new MessageEmbed().setTitle("no command found")
        );
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

    return message.channel.send(embed);
  }
}
