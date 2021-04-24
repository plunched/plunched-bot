import { Listener, Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ms = require("ms");

export default class cooldownListener extends Listener {
  constructor() {
    super("cooldownListener", {
      emitter: "commandHandler",
      event: "cooldown",
      category: "commandListener",
    });
  }

  public async exec(
    message: Message,
    command: Command,
    remaining: Date | number
  ): Promise<Message> {
    return await message.util.send(
      new MessageEmbed()
        .setAuthor(
          message.member.user.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle(`${command} is in cooldown`)
        .setDescription(
          `You reached the ratelimit, command available in \`${ms(remaining)}\``
        )
        .setTimestamp()
        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
    );
  }
}
