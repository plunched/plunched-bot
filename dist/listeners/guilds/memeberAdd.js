"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const db_1 = require("../../db");
const config_1 = require("../../config");
class guildMemberAddListener extends discord_akairo_1.Listener {
    constructor() {
        super("guildMemberAddListener", {
            emitter: "client",
            event: "guildMemberAdd",
            category: "guildListeners",
        });
    }
    async exec(member) {
        await db_1.pool.query("INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING", [member.guild.id, member.guild.name, config_1.prefix, 0]);
        const guild = await db_1.pool.query("SELECT guilds.guildID, channels.welcomeChannel FROM guilds LEFT JOIN channels ON guilds.guildID = channels.guildID");
        if (!guild.rows[0].welcomechannel)
            return;
        const channel = member.guild.channels.cache.get(guild.rows[0].welcomechannel);
        channel.send(`${member} Just joined the server`);
    }
}
exports.default = guildMemberAddListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtZWJlckFkZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvZ3VpbGRzL21lbWViZXJBZGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBMEM7QUFFMUMsaUNBQWdDO0FBQ2hDLHlDQUFzQztBQUV0QyxNQUFxQixzQkFBdUIsU0FBUSx5QkFBUTtJQUMxRDtRQUNFLEtBQUssQ0FBQyx3QkFBd0IsRUFBRTtZQUM5QixPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBbUI7UUFDbkMsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLGdIQUFnSCxFQUNoSCxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGVBQU0sRUFBRSxDQUFDLENBQUMsQ0FDaEQsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLE1BQU0sU0FBSSxDQUFDLEtBQUssQ0FDNUIsb0hBQW9ILENBQ3JILENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO1lBQUUsT0FBTztRQUUxQyxNQUFNLE9BQU8sR0FBZ0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQ2QsQ0FBQztRQUVqQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQTFCRCx5Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBHdWlsZE1lbWJlciwgVGV4dENoYW5uZWwgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uL2RiXCI7XHJcbmltcG9ydCB7IHByZWZpeCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGd1aWxkTWVtYmVyQWRkTGlzdGVuZXIgZXh0ZW5kcyBMaXN0ZW5lciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImd1aWxkTWVtYmVyQWRkTGlzdGVuZXJcIiwge1xyXG4gICAgICBlbWl0dGVyOiBcImNsaWVudFwiLFxyXG4gICAgICBldmVudDogXCJndWlsZE1lbWJlckFkZFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJndWlsZExpc3RlbmVyc1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZW1iZXI6IEd1aWxkTWVtYmVyKSB7XHJcbiAgICBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBcIklOU0VSVCBJTlRPIGd1aWxkcyAoZ3VpbGRJRCwgZ3VpbGROYW1lLCBwcmVmaXhlcywgdG90YWxDb21tYW5kcykgVkFMVUVTKCQxLCAkMiwgJDMsICQ0KSBPTiBDT05GTElDVCBETyBOT1RISU5HXCIsXHJcbiAgICAgIFttZW1iZXIuZ3VpbGQuaWQsIG1lbWJlci5ndWlsZC5uYW1lLCBwcmVmaXgsIDBdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGd1aWxkID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgXCJTRUxFQ1QgZ3VpbGRzLmd1aWxkSUQsIGNoYW5uZWxzLndlbGNvbWVDaGFubmVsIEZST00gZ3VpbGRzIExFRlQgSk9JTiBjaGFubmVscyBPTiBndWlsZHMuZ3VpbGRJRCA9IGNoYW5uZWxzLmd1aWxkSURcIlxyXG4gICAgKTtcclxuICAgIGlmICghZ3VpbGQucm93c1swXS53ZWxjb21lY2hhbm5lbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNoYW5uZWw6IFRleHRDaGFubmVsID0gbWVtYmVyLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmdldChcclxuICAgICAgZ3VpbGQucm93c1swXS53ZWxjb21lY2hhbm5lbFxyXG4gICAgKSBhcyBUZXh0Q2hhbm5lbDtcclxuXHJcbiAgICBjaGFubmVsLnNlbmQoYCR7bWVtYmVyfSBKdXN0IGpvaW5lZCB0aGUgc2VydmVyYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==