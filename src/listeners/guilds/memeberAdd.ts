import { Listener } from "discord-akairo";
import { GuildMember, TextChannel } from "discord.js";
import { pool } from "../../db";

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
      "INSERT INTO users (userID, cash, bank) VALUES($1, $2, $2) ON CONFLICT DO NOTHING",
      [member.id, 0]
    );

    const guild = await pool.query(
      "SELECT * FROM guilds LEFT JOIN channels ON guilds.guildID = channels.guildID"
    );

    const channel: TextChannel = member.guild.channels.cache.get(
      guild.rows[0].welcomechannel
    ) as TextChannel;
    console.log(channel.id);

    channel.send(`${member} joined the server`);
  }
}
