import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import { formatDistanceToNow } from "date-fns";
import { pool } from "../../db";
const ms = require("ms");

export default class botInviteCommand extends Command {
  constructor() {
    super("serverInfo", {
      aliases: ["serverInfo", "server-info", "server"],
      category: "information",
      description: {
        content: "returns info about the current server",
        usage: "server-Info",
        examples: ["server-info", "server"],
      },
      ratelimit: 3,
    });
  }

  public async exec(message: Message) {
    const onlineMembers = (await message.guild.fetch())
      .approximatePresenceCount;

    const textChannels = message.guild.channels.cache.filter(
      (channel) => channel.type === "text"
    ).size;

    const voiceChannels = message.guild.channels.cache.filter(
      (channel) => channel.type === "voice"
    ).size;

    const totalCommands = await pool.query(
      "SELECT totalCommands FROM guilds WHERE guildID = $1",
      [message.guild.id]
    );
    message.util.send(
      new MessageEmbed()
        .setColor(this.client.colors.default)
        .setTitle(`${message.guild.name}`)
        .addFields(
          {
            name: `id`,
            value: `${message.guild.id}`,
            inline: true,
          },
          {
            name: "owner",
            value: `<@${message.guild.ownerID}>`,
            inline: true,
          },
          {
            name: "members",
            value: `${this.client.emotes.online} ${onlineMembers} online  |  ${this.client.emotes.offline} ${message.guild.memberCount} offline`,
            inline: false,
          },
          {
            name: "channels",
            value: `# ${textChannels} text  |  ${voiceChannels} voice`,
            inline: false,
          },
          {
            name: "total commands",
            value: `${totalCommands.rows[0].totalcommands}`,
            inline: true,
          },
          {
            name: "ban count",
            value: await (await message.guild.fetchBans()).size,
            inline: true,
          }
        )
        .setImage(message.guild.icon)
        .setFooter(
          `created: ${message.guild.createdAt.toDateString()} | (${formatDistanceToNow(
            message.guild.createdTimestamp
          )} ago)`
        )
    );
  }
}
