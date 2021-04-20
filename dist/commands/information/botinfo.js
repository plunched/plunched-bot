"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const ms = require("ms");
class botInfoCommand extends discord_akairo_1.Command {
    constructor() {
        super("botinfo", {
            aliases: ["botinfo", "bot-info", "info"],
            category: "information",
            description: {
                content: "returns info about the bot",
                usage: "botinfo",
                examples: ["botinfo", "info"],
            },
            ratelimit: 3,
        });
    }
    exec(message) {
        return message.util.send(new discord_js_1.MessageEmbed()
            .setAuthor(message.member.user.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("Plunched-bot's info")
            .setDescription("This bot was developed by <@531953738491887627>")
            .setColor(this.client.colors.default)
            .addFields({
            name: `servers:`,
            value: this.client.guilds.cache.size,
            inline: true,
        }, {
            name: "Members:",
            value: this.client.users.cache.size,
            inline: true,
        }, {
            name: "channels:",
            value: this.client.channels.cache.size,
            inline: true,
        }, {
            name: "Api ping:",
            value: `${this.client.ws.ping}ms`,
            inline: true,
        }, {
            name: `Join date:`,
            value: message.guild.joinedAt.toDateString(),
            inline: true,
        }, {
            name: "Uptime",
            value: `${ms(this.client.uptime)}`,
            inline: true,
        }, {
            name: "\u200b",
            value: "[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)",
        })
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = botInfoCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9ib3RpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBcUIsY0FBZSxTQUFRLHdCQUFPO0lBQ2pEO1FBQ0UsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUM5QjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUMxQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDakIsU0FBUyxDQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQzthQUMvQixjQUFjLENBQUMsaURBQWlELENBQUM7YUFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxTQUFTLENBQ1I7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDcEMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ25DLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUN0QyxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7WUFDakMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUM1QyxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUNILHdPQUF3TztTQUMzTyxDQUNGO2FBQ0EsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQ3hFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFqRUQsaUNBaUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5jb25zdCBtcyA9IHJlcXVpcmUoXCJtc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdEluZm9Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImJvdGluZm9cIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJib3RpbmZvXCIsIFwiYm90LWluZm9cIiwgXCJpbmZvXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwicmV0dXJucyBpbmZvIGFib3V0IHRoZSBib3RcIixcclxuICAgICAgICB1c2FnZTogXCJib3RpbmZvXCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImJvdGluZm9cIiwgXCJpbmZvXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgIC5zZXRBdXRob3IoXHJcbiAgICAgICAgICBtZXNzYWdlLm1lbWJlci51c2VyLnRhZyxcclxuICAgICAgICAgIG1lc3NhZ2UuYXV0aG9yLmRpc3BsYXlBdmF0YXJVUkwoeyBkeW5hbWljOiB0cnVlIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zZXRUaXRsZShcIlBsdW5jaGVkLWJvdCdzIGluZm9cIilcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJUaGlzIGJvdCB3YXMgZGV2ZWxvcGVkIGJ5IDxANTMxOTUzNzM4NDkxODg3NjI3PlwiKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAuYWRkRmllbGRzKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBgc2VydmVyczpgLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5jbGllbnQuZ3VpbGRzLmNhY2hlLnNpemUsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWVtYmVyczpcIixcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuY2xpZW50LnVzZXJzLmNhY2hlLnNpemUsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY2hhbm5lbHM6XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNsaWVudC5jaGFubmVscy5jYWNoZS5zaXplLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFwaSBwaW5nOlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7dGhpcy5jbGllbnQud3MucGluZ31tc2AsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IGBKb2luIGRhdGU6YCxcclxuICAgICAgICAgICAgdmFsdWU6IG1lc3NhZ2UuZ3VpbGQuam9pbmVkQXQudG9EYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVXB0aW1lXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHttcyh0aGlzLmNsaWVudC51cHRpbWUpfWAsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiXFx1MjAwYlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTpcclxuICAgICAgICAgICAgICBcIltzdXBwb3J0IHNlcnZlcl0oaHR0cHM6Ly9kaXNjb3JkLmdnL3BEcVhwWkFWUFkpIHwgW2FkZCBib3RdKGh0dHBzOi8vZGlzY29yZC5jb20vYXBpL29hdXRoMi9hdXRob3JpemU/Y2xpZW50X2lkPTgwNjI0MjM4MTg2NjIwNTE5NSZwZXJtaXNzaW9ucz0yMTQ3NDgzNjQ3JnNjb3BlPWJvdCkgfCBbdm90ZSBoZXJlXShodHRwczovL2Rpc2NvcmRib3RsaXN0LmNvbS9ib3RzL3BsdW5jaGVkLWJvdC91cHZvdGUpXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19