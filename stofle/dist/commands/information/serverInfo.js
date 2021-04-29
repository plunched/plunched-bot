"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const date_fns_1 = require("date-fns");
const db_1 = require("../../db");
class botInviteCommand extends discord_akairo_1.Command {
    constructor() {
        super("serverInfo", {
            aliases: ["serverInfo", "server-info", "server"],
            category: "information",
            description: {
                content: "Gives you information about the server.",
                usage: "server-Info",
                examples: ["server-info", "server"],
            },
            ratelimit: 3,
        });
    }
    async exec(message) {
        const onlineMembers = (await message.guild.fetch())
            .approximatePresenceCount;
        const textChannels = message.guild.channels.cache.filter((channel) => channel.type === "text").size;
        const voiceChannels = message.guild.channels.cache.filter((channel) => channel.type === "voice").size;
        const totalCommands = await db_1.pool.query("SELECT totalCommands FROM guilds WHERE guildID = $1", [message.guild.id]);
        message.util.send(new discord_js_1.MessageEmbed()
            .setColor(this.client.colors.default)
            .setTitle(`${message.guild.name}`)
            .addFields({
            name: `server-id`,
            value: `${message.guild.id}`,
            inline: true,
        }, {
            name: "owner",
            value: `<@${message.guild.ownerID}>`,
            inline: true,
        }, {
            name: "members",
            value: `${this.client.emotes.online} ${onlineMembers} online  |  ${this.client.emotes.offline} ${message.guild.memberCount} offline`,
            inline: false,
        }, {
            name: "channels",
            value: `# ${textChannels} text  |  ${voiceChannels} voice`,
            inline: false,
        }, {
            name: "total commands",
            value: `${totalCommands.rows[0].totalcommands}`,
            inline: true,
        }, {
            name: "ban count",
            value: await (await message.guild.fetchBans()).size,
            inline: true,
        })
            .setImage(message.guild.icon)
            .setFooter(`created: ${message.guild.createdAt.toDateString()} | (${date_fns_1.formatDistanceToNow(message.guild.createdTimestamp)} ago)`));
    }
}
exports.default = botInviteCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVySW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9zZXJ2ZXJJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCx1Q0FBK0M7QUFDL0MsaUNBQWdDO0FBRWhDLE1BQXFCLGdCQUFpQixTQUFRLHdCQUFPO0lBQ25EO1FBQ0UsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQztZQUNoRCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLHlDQUF5QztnQkFDbEQsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLFFBQVEsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7YUFDcEM7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQ2hDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2hELHdCQUF3QixDQUFDO1FBRTVCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3RELENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FDckMsQ0FBQyxJQUFJLENBQUM7UUFFUCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN2RCxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLENBQ3RDLENBQUMsSUFBSSxDQUFDO1FBRVAsTUFBTSxhQUFhLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNwQyxxREFBcUQsRUFDckQsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNuQixDQUFDO1FBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2YsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2pDLFNBQVMsQ0FDUjtZQUNFLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQzVCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUc7WUFDcEMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksYUFBYSxlQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsVUFBVTtZQUNwSSxNQUFNLEVBQUUsS0FBSztTQUNkLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRO1lBQzFELE1BQU0sRUFBRSxLQUFLO1NBQ2QsRUFDRDtZQUNFLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsS0FBSyxFQUFFLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDL0MsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJO1lBQ25ELE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FDRjthQUNBLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUM1QixTQUFTLENBQ1IsWUFBWSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyw4QkFBbUIsQ0FDMUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDL0IsT0FBTyxDQUNULENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTFFRCxtQ0EwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm90SW52aXRlQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJzZXJ2ZXJJbmZvXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wic2VydmVySW5mb1wiLCBcInNlcnZlci1pbmZvXCIsIFwic2VydmVyXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiR2l2ZXMgeW91IGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZXJ2ZXIuXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwic2VydmVyLUluZm9cIixcclxuICAgICAgICBleGFtcGxlczogW1wic2VydmVyLWluZm9cIiwgXCJzZXJ2ZXJcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgY29uc3Qgb25saW5lTWVtYmVycyA9IChhd2FpdCBtZXNzYWdlLmd1aWxkLmZldGNoKCkpXHJcbiAgICAgIC5hcHByb3hpbWF0ZVByZXNlbmNlQ291bnQ7XHJcblxyXG4gICAgY29uc3QgdGV4dENoYW5uZWxzID0gbWVzc2FnZS5ndWlsZC5jaGFubmVscy5jYWNoZS5maWx0ZXIoXHJcbiAgICAgIChjaGFubmVsKSA9PiBjaGFubmVsLnR5cGUgPT09IFwidGV4dFwiXHJcbiAgICApLnNpemU7XHJcblxyXG4gICAgY29uc3Qgdm9pY2VDaGFubmVscyA9IG1lc3NhZ2UuZ3VpbGQuY2hhbm5lbHMuY2FjaGUuZmlsdGVyKFxyXG4gICAgICAoY2hhbm5lbCkgPT4gY2hhbm5lbC50eXBlID09PSBcInZvaWNlXCJcclxuICAgICkuc2l6ZTtcclxuXHJcbiAgICBjb25zdCB0b3RhbENvbW1hbmRzID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgXCJTRUxFQ1QgdG90YWxDb21tYW5kcyBGUk9NIGd1aWxkcyBXSEVSRSBndWlsZElEID0gJDFcIixcclxuICAgICAgW21lc3NhZ2UuZ3VpbGQuaWRdXHJcbiAgICApO1xyXG4gICAgbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAuc2V0VGl0bGUoYCR7bWVzc2FnZS5ndWlsZC5uYW1lfWApXHJcbiAgICAgICAgLmFkZEZpZWxkcyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogYHNlcnZlci1pZGAsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHttZXNzYWdlLmd1aWxkLmlkfWAsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwib3duZXJcIixcclxuICAgICAgICAgICAgdmFsdWU6IGA8QCR7bWVzc2FnZS5ndWlsZC5vd25lcklEfT5gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm1lbWJlcnNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGAke3RoaXMuY2xpZW50LmVtb3Rlcy5vbmxpbmV9ICR7b25saW5lTWVtYmVyc30gb25saW5lICB8ICAke3RoaXMuY2xpZW50LmVtb3Rlcy5vZmZsaW5lfSAke21lc3NhZ2UuZ3VpbGQubWVtYmVyQ291bnR9IG9mZmxpbmVgLFxyXG4gICAgICAgICAgICBpbmxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJjaGFubmVsc1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCMgJHt0ZXh0Q2hhbm5lbHN9IHRleHQgIHwgICR7dm9pY2VDaGFubmVsc30gdm9pY2VgLFxyXG4gICAgICAgICAgICBpbmxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJ0b3RhbCBjb21tYW5kc1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7dG90YWxDb21tYW5kcy5yb3dzWzBdLnRvdGFsY29tbWFuZHN9YCxcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJiYW4gY291bnRcIixcclxuICAgICAgICAgICAgdmFsdWU6IGF3YWl0IChhd2FpdCBtZXNzYWdlLmd1aWxkLmZldGNoQmFucygpKS5zaXplLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zZXRJbWFnZShtZXNzYWdlLmd1aWxkLmljb24pXHJcbiAgICAgICAgLnNldEZvb3RlcihcclxuICAgICAgICAgIGBjcmVhdGVkOiAke21lc3NhZ2UuZ3VpbGQuY3JlYXRlZEF0LnRvRGF0ZVN0cmluZygpfSB8ICgke2Zvcm1hdERpc3RhbmNlVG9Ob3coXHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZ3VpbGQuY3JlYXRlZFRpbWVzdGFtcFxyXG4gICAgICAgICAgKX0gYWdvKWBcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=