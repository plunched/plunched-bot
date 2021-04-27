import { Listener } from "discord-akairo";
import { GuildMember, TextChannel } from "discord.js";
import { pool } from "../../db";
import { prefix } from "../../config";

export default class guildMemberAddListener extends Listener {
  constructor() {
    super("guildMemberAddListener", {
      emitter: "client",
      event: "guildMemberAdd",
      category: "guildListeners",
    });
  }

  public async exec(member: GuildMember) {
    await pool.query(
      "INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING",
      [member.guild.id, member.guild.name, prefix, 0]
    );

    const guild = await pool.query(
      "SELECT guilds.guildID, channels.welcomeChannel FROM guilds LEFT JOIN channels ON guilds.guildID = channels.guildID"
    );
    if (!guild.rows[0].welcomechannel) return;

    const channel: TextChannel = member.guild.channels.cache.get(
      guild.rows[0].welcomechannel
    ) as TextChannel;

    channel.send(`${member} Just joined the server`);
  }
}
