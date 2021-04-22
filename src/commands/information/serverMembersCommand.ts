import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";

export default class serverMembersCommand extends Command {
  constructor() {
    super("serverMembersCommand", {
      aliases: ["serverMembers", "members", "server-members"],
      category: "information",
      description: {
        content: "returns the amount of members in the server",
        usage: "server-members",
        examples: ["server-members", "members"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message): Promise<Message> {
    return message.util.send(
      new MessageEmbed()
        .setColor(this.client.colors.default)
        .setTitle(`${message.guild.name}'members`).setDescription(`${
        message.guild.name
      } has:
        ${this.client.emotes.online} ${
        (await message.guild.fetch()).approximatePresenceCount
      } online members
        ${this.client.emotes.offline} ${
        message.guild.memberCount
      } offline member`)
    );
  }
}
