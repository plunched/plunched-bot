"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const config_1 = require("../../config");
const db_1 = require("../../db");
class pingCommand extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
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
        await db_1.pool.query("INSERT INTO users (userID, job) VALUES($1, $2) ON CONFLICT DO NOTHING", [message.author.id, "garbage-collector"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCx5Q0FBc0M7QUFDdEMsaUNBQWdDO0FBRWhDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM5QztRQUNFLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNuQjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDaEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25DLHFEQUFxRCxDQUN0RCxDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sU0FBSSxDQUFDLEtBQUssQ0FDZCxnSEFBZ0gsRUFDaEgsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxlQUFNLEVBQUUsQ0FBQyxDQUFDLENBQ2xELENBQUM7UUFDRixNQUFNLFNBQUksQ0FBQyxLQUFLLENBQ2QsdUVBQXVFLEVBQ3ZFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FDekMsQ0FBQztRQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFFcEMsT0FBTyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM3QixFQUFFLEVBQ0YsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsU0FBUyxDQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFNBQVMsQ0FDUjtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTTtTQUN0QyxFQUNEO1lBQ0UsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixLQUFLLEVBQUUsS0FBSyxNQUFNLE1BQU07U0FDekIsRUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUNILHdPQUF3TztTQUMzTyxDQUNGO2FBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXpERCw4QkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHByZWZpeCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGluZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwicGluZ1wiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcInBpbmdcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJDaGVjayB0aGUgbGF0ZW5jeSBvZiB0aGUgYm90LlwiLFxyXG4gICAgICAgIHVzYWdlOiBcInBpbmdcIixcclxuICAgICAgICBleGFtcGxlczogW1wicGluZ1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBjb25zdCBwaW5nTWVzc2FnZSA9IG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBgPGE6ZGlzY29yZF9sb2FkaW5nOjgwOTczMTM1NjA1NzE0MTI1OD4gZmluZGluZyBwaW5nYFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwcmVEYXRlID0gRGF0ZS5ub3coKTtcclxuICAgIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIFwiSU5TRVJUIElOVE8gZ3VpbGRzIChndWlsZElELCBndWlsZE5hbWUsIHByZWZpeGVzLCB0b3RhbENvbW1hbmRzKSBWQUxVRVMoJDEsICQyLCAkMywgJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcIixcclxuICAgICAgW21lc3NhZ2UuZ3VpbGQuaWQsIG1lc3NhZ2UuZ3VpbGQubmFtZSwgcHJlZml4LCAwXVxyXG4gICAgKTtcclxuICAgIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgIFwiSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJJRCwgam9iKSBWQUxVRVMoJDEsICQyKSBPTiBDT05GTElDVCBETyBOT1RISU5HXCIsXHJcbiAgICAgIFttZXNzYWdlLmF1dGhvci5pZCwgXCJnYXJiYWdlLWNvbGxlY3RvclwiXVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiUGluZyA9IERhdGUubm93KCkgLSBwcmVEYXRlO1xyXG5cclxuICAgIHJldHVybiAoYXdhaXQgcGluZ01lc3NhZ2UpLmVkaXQoXHJcbiAgICAgIFwiXCIsXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRBdXRob3IoXHJcbiAgICAgICAgICBtZXNzYWdlLm1lbWJlci51c2VyLnRhZyxcclxuICAgICAgICAgIG1lc3NhZ2UuYXV0aG9yLmRpc3BsYXlBdmF0YXJVUkwoeyBkeW5hbWljOiB0cnVlIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5hZGRGaWVsZHMoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXBpIGxhdGVuY3k6XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgXFxgJHt0aGlzLmNsaWVudC53cy5waW5nfW1zXFxgYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGF0YWJhc2UgbGF0ZW5jeTpcIixcclxuICAgICAgICAgICAgdmFsdWU6IGBcXGAke2RiUGluZ31tc1xcYGAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlxcdTIwMGJcIixcclxuICAgICAgICAgICAgdmFsdWU6XHJcbiAgICAgICAgICAgICAgXCJbc3VwcG9ydCBzZXJ2ZXJdKGh0dHBzOi8vZGlzY29yZC5nZy9wRHFYcFpBVlBZKSB8IFthZGQgYm90XShodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD04MDYyNDIzODE4NjYyMDUxOTUmcGVybWlzc2lvbnM9MjE0NzQ4MzY0NyZzY29wZT1ib3QpIHwgW3ZvdGUgaGVyZV0oaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlKVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgLnNldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgLnNldEZvb3Rlcih0aGlzLmNsaWVudC51c2VyLnRhZywgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=