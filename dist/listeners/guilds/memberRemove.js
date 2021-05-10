"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const db_1 = require("../../db");
const config_1 = require("../../config");
class guildMemberAddListener extends discord_akairo_1.Listener {
    constructor() {
        super("guildMemberRemoveListener", {
            emitter: "client",
            event: "guildMemberRemove",
            category: "guildListeners",
        });
    }
    async exec(member) {
        await db_1.pool.query("INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING", [member.guild.id, member.guild.name, config_1.prefix, 0]);
        const guild = await db_1.pool.query("SELECT guilds.guildID, channels.leavechannel FROM guilds LEFT JOIN channels ON guilds.guildID = channels.guildID");
        if (!guild.rows[0].leavechannel)
            return;
        const channel = member.guild.channels.cache.get(guild.rows[0].leavechannel);
        channel.send(`${member} Just left the server`);
    }
}
exports.default = guildMemberAddListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyUmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpc3RlbmVycy9ndWlsZHMvbWVtYmVyUmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTBDO0FBRTFDLGlDQUFnQztBQUNoQyx5Q0FBc0M7QUFFdEMsTUFBcUIsc0JBQXVCLFNBQVEseUJBQVE7SUFDMUQ7UUFDRSxLQUFLLENBQUMsMkJBQTJCLEVBQUU7WUFDakMsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQW1CO1FBQ25DLE1BQU0sU0FBSSxDQUFDLEtBQUssQ0FDZCxnSEFBZ0gsRUFDaEgsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxlQUFNLEVBQUUsQ0FBQyxDQUFDLENBQ2hELENBQUM7UUFFRixNQUFNLEtBQUssR0FBRyxNQUFNLFNBQUksQ0FBQyxLQUFLLENBQzVCLGtIQUFrSCxDQUNuSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUFFLE9BQU87UUFFeEMsTUFBTSxPQUFPLEdBQWdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQzFELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUNaLENBQUM7UUFFakIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sdUJBQXVCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUExQkQseUNBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgR3VpbGRNZW1iZXIsIFRleHRDaGFubmVsIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi9kYlwiO1xyXG5pbXBvcnQgeyBwcmVmaXggfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBndWlsZE1lbWJlckFkZExpc3RlbmVyIGV4dGVuZHMgTGlzdGVuZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJndWlsZE1lbWJlclJlbW92ZUxpc3RlbmVyXCIsIHtcclxuICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcclxuICAgICAgZXZlbnQ6IFwiZ3VpbGRNZW1iZXJSZW1vdmVcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiZ3VpbGRMaXN0ZW5lcnNcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMobWVtYmVyOiBHdWlsZE1lbWJlcikge1xyXG4gICAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgXCJJTlNFUlQgSU5UTyBndWlsZHMgKGd1aWxkSUQsIGd1aWxkTmFtZSwgcHJlZml4ZXMsIHRvdGFsQ29tbWFuZHMpIFZBTFVFUygkMSwgJDIsICQzLCAkNCkgT04gQ09ORkxJQ1QgRE8gTk9USElOR1wiLFxyXG4gICAgICBbbWVtYmVyLmd1aWxkLmlkLCBtZW1iZXIuZ3VpbGQubmFtZSwgcHJlZml4LCAwXVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBndWlsZCA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIFwiU0VMRUNUIGd1aWxkcy5ndWlsZElELCBjaGFubmVscy5sZWF2ZWNoYW5uZWwgRlJPTSBndWlsZHMgTEVGVCBKT0lOIGNoYW5uZWxzIE9OIGd1aWxkcy5ndWlsZElEID0gY2hhbm5lbHMuZ3VpbGRJRFwiXHJcbiAgICApO1xyXG4gICAgaWYgKCFndWlsZC5yb3dzWzBdLmxlYXZlY2hhbm5lbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNoYW5uZWw6IFRleHRDaGFubmVsID0gbWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmdldChcclxuICAgICAgZ3VpbGQucm93c1swXS5sZWF2ZWNoYW5uZWxcclxuICAgICkgYXMgVGV4dENoYW5uZWw7XHJcblxyXG4gICAgY2hhbm5lbC5zZW5kKGAke21lbWJlcn0gSnVzdCBsZWZ0IHRoZSBzZXJ2ZXJgKTtcclxuICB9XHJcbn1cclxuIl19