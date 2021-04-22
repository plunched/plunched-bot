"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const date_fns_1 = require("date-fns");
const db_1 = require("../../db");
const ms = require("ms");
const online = "<:online:830091620845224026>";
const offline = "<:offline:830091284483670046>";
class botInviteCommand extends discord_akairo_1.Command {
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
    async exec(message) {
        const onlineMembers = (await message.guild.fetch())
            .approximatePresenceCount;
        const textChannels = message.guild.channels.cache.filter((channel) => channel.type === "text").size;
        const voiceChannels = message.guild.channels.cache.filter((channel) => channel.type === "voice").size;
        const totalCommands = await db_1.pool.query("SELECT totalCommands FROM guilds WHERE guildID = $1", [message.guild.id]);
        message.util.send(new discord_js_1.MessageEmbed()
            .setColor("738adb")
            .setTitle(`${message.guild.name}`)
            .addFields({
            name: `id`,
            value: `${message.guild.id}`,
            inline: true,
        }, {
            name: "owner",
            value: `<@${message.guild.ownerID}>`,
            inline: true,
        }, {
            name: "members",
            value: `${online} ${onlineMembers} online  |  ${offline} ${message.guild.memberCount} offline`,
            inline: false,
        }, {
            name: "channels",
            value: `# ${textChannels} text  |  ${voiceChannels} voice`,
            inline: false,
        }, {
            name: "totalCommands",
            value: `${totalCommands}`,
            inline: true,
        }
        // {
        //   name: ,
        //   value: ,
        //   inline: true
        // },
        )
            .setImage(message.guild.icon)
            .setFooter(`created: ${message.guild.createdAt.toDateString()} | (${date_fns_1.formatDistanceToNow(message.guild.createdTimestamp)} ago)`));
    }
}
exports.default = botInviteCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVySW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9zZXJ2ZXJJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCx1Q0FBK0M7QUFDL0MsaUNBQWdDO0FBQ2hDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztBQUM5QyxNQUFNLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztBQUVoRCxNQUFxQixnQkFBaUIsU0FBUSx3QkFBTztJQUNuRDtRQUNFLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUM7WUFDaEQsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSx1Q0FBdUM7Z0JBQ2hELEtBQUssRUFBRSxZQUFZO2dCQUNuQixRQUFRLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2FBQ3BDO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUNoQyxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoRCx3QkFBd0IsQ0FBQztRQUU1QixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN0RCxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLENBQ3JDLENBQUMsSUFBSSxDQUFDO1FBRVAsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdkQsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUN0QyxDQUFDLElBQUksQ0FBQztRQUVQLE1BQU0sYUFBYSxHQUFHLE1BQU0sU0FBSSxDQUFDLEtBQUssQ0FDcEMscURBQXFELEVBQ3JELENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDbkIsQ0FBQztRQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNmLElBQUkseUJBQVksRUFBRTthQUNmLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbEIsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQyxTQUFTLENBQ1I7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQzVCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUc7WUFDcEMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsR0FBRyxNQUFNLElBQUksYUFBYSxlQUFlLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsVUFBVTtZQUM5RixNQUFNLEVBQUUsS0FBSztTQUNkLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRO1lBQzFELE1BQU0sRUFBRSxLQUFLO1NBQ2QsRUFDRDtZQUNFLElBQUksRUFBRSxlQUFlO1lBQ3JCLEtBQUssRUFBRSxHQUFHLGFBQWEsRUFBRTtZQUN6QixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsSUFBSTtRQUNKLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLEtBQUs7U0FDTjthQUNBLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUM1QixTQUFTLENBQ1IsWUFBWSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyw4QkFBbUIsQ0FDMUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDL0IsT0FBTyxDQUNULENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTFFRCxtQ0EwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi9kYlwiO1xyXG5jb25zdCBtcyA9IHJlcXVpcmUoXCJtc1wiKTtcclxuY29uc3Qgb25saW5lID0gXCI8Om9ubGluZTo4MzAwOTE2MjA4NDUyMjQwMjY+XCI7XHJcbmNvbnN0IG9mZmxpbmUgPSBcIjw6b2ZmbGluZTo4MzAwOTEyODQ0ODM2NzAwNDY+XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib3RJbnZpdGVDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcInNlcnZlckluZm9cIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJzZXJ2ZXJJbmZvXCIsIFwic2VydmVyLWluZm9cIiwgXCJzZXJ2ZXJcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJyZXR1cm5zIGluZm8gYWJvdXQgdGhlIGN1cnJlbnQgc2VydmVyXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwic2VydmVySW5mb1wiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJzZXJ2ZXItaW5mb1wiLCBcInNlcnZlclwiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBvbmxpbmVNZW1iZXJzID0gKGF3YWl0IG1lc3NhZ2UuZ3VpbGQuZmV0Y2goKSlcclxuICAgICAgLmFwcHJveGltYXRlUHJlc2VuY2VDb3VudDtcclxuXHJcbiAgICBjb25zdCB0ZXh0Q2hhbm5lbHMgPSBtZXNzYWdlLmd1aWxkLmNoYW5uZWxzLmNhY2hlLmZpbHRlcihcclxuICAgICAgKGNoYW5uZWwpID0+IGNoYW5uZWwudHlwZSA9PT0gXCJ0ZXh0XCJcclxuICAgICkuc2l6ZTtcclxuXHJcbiAgICBjb25zdCB2b2ljZUNoYW5uZWxzID0gbWVzc2FnZS5ndWlsZC5jaGFubmVscy5jYWNoZS5maWx0ZXIoXHJcbiAgICAgIChjaGFubmVsKSA9PiBjaGFubmVsLnR5cGUgPT09IFwidm9pY2VcIlxyXG4gICAgKS5zaXplO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsQ29tbWFuZHMgPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICBcIlNFTEVDVCB0b3RhbENvbW1hbmRzIEZST00gZ3VpbGRzIFdIRVJFIGd1aWxkSUQgPSAkMVwiLFxyXG4gICAgICBbbWVzc2FnZS5ndWlsZC5pZF1cclxuICAgICk7XHJcbiAgICBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldENvbG9yKFwiNzM4YWRiXCIpXHJcbiAgICAgICAgLnNldFRpdGxlKGAke21lc3NhZ2UuZ3VpbGQubmFtZX1gKVxyXG4gICAgICAgIC5hZGRGaWVsZHMoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IGBpZGAsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHttZXNzYWdlLmd1aWxkLmlkfWAsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwib3duZXJcIixcclxuICAgICAgICAgICAgdmFsdWU6IGA8QCR7bWVzc2FnZS5ndWlsZC5vd25lcklEfT5gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm1lbWJlcnNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGAke29ubGluZX0gJHtvbmxpbmVNZW1iZXJzfSBvbmxpbmUgIHwgICR7b2ZmbGluZX0gJHttZXNzYWdlLmd1aWxkLm1lbWJlckNvdW50fSBvZmZsaW5lYCxcclxuICAgICAgICAgICAgaW5saW5lOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY2hhbm5lbHNcIixcclxuICAgICAgICAgICAgdmFsdWU6IGAjICR7dGV4dENoYW5uZWxzfSB0ZXh0ICB8ICAke3ZvaWNlQ2hhbm5lbHN9IHZvaWNlYCxcclxuICAgICAgICAgICAgaW5saW5lOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidG90YWxDb21tYW5kc1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7dG90YWxDb21tYW5kc31gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAvLyAgIG5hbWU6ICxcclxuICAgICAgICAgIC8vICAgdmFsdWU6ICxcclxuICAgICAgICAgIC8vICAgaW5saW5lOiB0cnVlXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgIClcclxuICAgICAgICAuc2V0SW1hZ2UobWVzc2FnZS5ndWlsZC5pY29uKVxyXG4gICAgICAgIC5zZXRGb290ZXIoXHJcbiAgICAgICAgICBgY3JlYXRlZDogJHttZXNzYWdlLmd1aWxkLmNyZWF0ZWRBdC50b0RhdGVTdHJpbmcoKX0gfCAoJHtmb3JtYXREaXN0YW5jZVRvTm93KFxyXG4gICAgICAgICAgICBtZXNzYWdlLmd1aWxkLmNyZWF0ZWRUaW1lc3RhbXBcclxuICAgICAgICAgICl9IGFnbylgXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19