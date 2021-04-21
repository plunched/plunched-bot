import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const ms = require("ms");
const online = "<:online:830091620845224026>";
const offline = "<:offline:830091284483670046>";

export default class botInviteCommand extends Command {
  constructor() {
    super("serverInfo", {
      aliases: ["serverInfo", "server-info", "server"],
      category: "information",
      description: {
        content: "returns info about the current server",
        usage: "serverInfo",
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
    message.util.send(
      new MessageEmbed()
        .setColor("738adb")
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
            value: `${online} ${onlineMembers} online\n${offline} ${message.guild.memberCount} offline`,
            inline: true,
          },
          {
            name: "channels",
            value: `# ${textChannels} text\n${voiceChannels} voice`,
            inline: true,
          }
          // {
          //   name: ,
          //   value: ,
          //   inline: true
          // },
          // {
          //   name: ,
          //   value: ,
          //   inline: true
          // },
        )
        .setImage(message.guild.icon)
        .setFooter(
          `created: ${message.guild.createdAt.toDateString()} | (${new Date(
            Date.now() - message.guild.createdTimestamp
          )} ago)`
        )
    );
  }
}
