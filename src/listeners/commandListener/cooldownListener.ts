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
        .setTitle(`${command} is in cooldown`)
        .setDescription(
          `You reached the ratelimit, command available in \`${ms(remaining)}\``
        )
    );
  }
}
