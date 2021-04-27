"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const config_1 = require("../../config");
const db_1 = require("../../db");
class pingCommand extends discord_akairo_1.Command {
    constructor() {
        super("pingCommand", {
            aliases: ["ping"],
            category: "information",
            description: {
                content: "Check the latency of the bot.",
                usage: "ping",
                examples: ["ping"],
            },
            ratelimit: 3,
        });
    }
    async exec(message) {
        const pingMessage = message.util.send(`<a:discord_loading:809731356057141258> finding ping`);
        const preDate = Date.now();
        await db_1.pool.query("INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING", [message.guild.id, message.guild.name, config_1.prefix, 0]);
        await db_1.pool.query("INSERT INTO users (userID, cash, bank) VALUES($1, $2, $2) ON CONFLICT DO NOTHING", [message.author.id, 0]);
        const dbPing = Date.now() - preDate;
        return (await pingMessage).edit("", new discord_js_1.MessageEmbed()
            .setAuthor(message.member.user.tag, message.author.displayAvatarURL({ dynamic: true }))
            .addFields({
            name: "api latency:",
            value: `\`${this.client.ws.ping}ms\``,
        }, {
            name: "database latency:",
            value: `\`${dbPing}ms\``,
        }, {
            name: "\u200b",
            value: "[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)",
        })
            .setColor(this.client.colors.default)
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = pingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCx5Q0FBc0M7QUFDdEMsaUNBQWdDO0FBRWhDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM5QztRQUNFLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDbkI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQ2hDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQyxxREFBcUQsQ0FDdEQsQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixNQUFNLFNBQUksQ0FBQyxLQUFLLENBQ2QsZ0hBQWdILEVBQ2hILENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsZUFBTSxFQUFFLENBQUMsQ0FBQyxDQUNsRCxDQUFDO1FBQ0YsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLGtGQUFrRixFQUNsRixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUN2QixDQUFDO1FBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUVwQyxPQUFPLENBQUMsTUFBTSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzdCLEVBQUUsRUFDRixJQUFJLHlCQUFZLEVBQUU7YUFDZixTQUFTLENBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ25EO2FBQ0EsU0FBUyxDQUNSO1lBQ0UsSUFBSSxFQUFFLGNBQWM7WUFDcEIsS0FBSyxFQUFFLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNO1NBQ3RDLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLEtBQUssRUFBRSxLQUFLLE1BQU0sTUFBTTtTQUN6QixFQUNEO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxLQUFLLEVBQ0gsd09BQXdPO1NBQzNPLENBQ0Y7YUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBekRELDhCQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgcHJlZml4IH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJwaW5nQ29tbWFuZFwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcInBpbmdcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJDaGVjayB0aGUgbGF0ZW5jeSBvZiB0aGUgYm90LlwiLFxyXG4gICAgICAgIHVzYWdlOiBcInBpbmdcIixcclxuICAgICAgICBleGFtcGxlczogW1wicGluZ1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBjb25zdCBwaW5nTWVzc2FnZSA9IG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBgPGE6ZGlzY29yZF9sb2FkaW5nOjgwOTczMTM1NjA1NzE0MTI1OD4gZmluZGluZyBwaW5nYFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwcmVEYXRlID0gRGF0ZS5ub3coKTtcclxuICAgIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIFwiSU5TRVJUIElOVE8gZ3VpbGRzIChndWlsZElELCBndWlsZE5hbWUsIHByZWZpeGVzLCB0b3RhbENvbW1hbmRzKSBWQUxVRVMoJDEsICQyLCAkMywgJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcIixcclxuICAgICAgW21lc3NhZ2UuZ3VpbGQuaWQsIG1lc3NhZ2UuZ3VpbGQubmFtZSwgcHJlZml4LCAwXVxyXG4gICAgKTtcclxuICAgIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIFwiSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJJRCwgY2FzaCwgYmFuaykgVkFMVUVTKCQxLCAkMiwgJDIpIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcIixcclxuICAgICAgW21lc3NhZ2UuYXV0aG9yLmlkLCAwXVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiUGluZyA9IERhdGUubm93KCkgLSBwcmVEYXRlO1xyXG5cclxuICAgIHJldHVybiAoYXdhaXQgcGluZ01lc3NhZ2UpLmVkaXQoXHJcbiAgICAgIFwiXCIsXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRBdXRob3IoXHJcbiAgICAgICAgICBtZXNzYWdlLm1lbWJlci51c2VyLnRhZyxcclxuICAgICAgICAgIG1lc3NhZ2UuYXV0aG9yLmRpc3BsYXlBdmF0YXJVUkwoeyBkeW5hbWljOiB0cnVlIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5hZGRGaWVsZHMoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXBpIGxhdGVuY3k6XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgXFxgJHt0aGlzLmNsaWVudC53cy5waW5nfW1zXFxgYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGF0YWJhc2UgbGF0ZW5jeTpcIixcclxuICAgICAgICAgICAgdmFsdWU6IGBcXGAke2RiUGluZ31tc1xcYGAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlxcdTIwMGJcIixcclxuICAgICAgICAgICAgdmFsdWU6XHJcbiAgICAgICAgICAgICAgXCJbc3VwcG9ydCBzZXJ2ZXJdKGh0dHBzOi8vZGlzY29yZC5nZy9wRHFYcFpBVlBZKSB8IFthZGQgYm90XShodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD04MDYyNDIzODE4NjYyMDUxOTUmcGVybWlzc2lvbnM9MjE0NzQ4MzY0NyZzY29wZT1ib3QpIHwgW3ZvdGUgaGVyZV0oaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlKVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgLnNldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgLnNldEZvb3Rlcih0aGlzLmNsaWVudC51c2VyLnRhZywgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=