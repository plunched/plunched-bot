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
                usage: "bot-info",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9ib3RpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBcUIsY0FBZSxTQUFRLHdCQUFPO0lBQ2pEO1FBQ0UsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUM5QjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUMxQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDakIsU0FBUyxDQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQzthQUMvQixjQUFjLENBQUMsaURBQWlELENBQUM7YUFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxTQUFTLENBQ1I7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDcEMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ25DLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUN0QyxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsV0FBVztZQUNqQixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7WUFDakMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUM1QyxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUNILHdPQUF3TztTQUMzTyxDQUNGO2FBQ0EsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQ3hFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFqRUQsaUNBaUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5jb25zdCBtcyA9IHJlcXVpcmUoXCJtc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdEluZm9Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImJvdGluZm9cIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJib3RpbmZvXCIsIFwiYm90LWluZm9cIiwgXCJpbmZvXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwicmV0dXJucyBpbmZvIGFib3V0IHRoZSBib3RcIixcclxuICAgICAgICB1c2FnZTogXCJib3QtaW5mb1wiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJib3RpbmZvXCIsIFwiaW5mb1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAuc2V0QXV0aG9yKFxyXG4gICAgICAgICAgbWVzc2FnZS5tZW1iZXIudXNlci50YWcsXHJcbiAgICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICAuc2V0VGl0bGUoXCJQbHVuY2hlZC1ib3QncyBpbmZvXCIpXHJcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKFwiVGhpcyBib3Qgd2FzIGRldmVsb3BlZCBieSA8QDUzMTk1MzczODQ5MTg4NzYyNz5cIilcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgLmFkZEZpZWxkcyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogYHNlcnZlcnM6YCxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuY2xpZW50Lmd1aWxkcy5jYWNoZS5zaXplLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk1lbWJlcnM6XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNsaWVudC51c2Vycy5jYWNoZS5zaXplLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImNoYW5uZWxzOlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5jbGllbnQuY2hhbm5lbHMuY2FjaGUuc2l6ZSxcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcGkgcGluZzpcIixcclxuICAgICAgICAgICAgdmFsdWU6IGAke3RoaXMuY2xpZW50LndzLnBpbmd9bXNgLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBgSm9pbiBkYXRlOmAsXHJcbiAgICAgICAgICAgIHZhbHVlOiBtZXNzYWdlLmd1aWxkLmpvaW5lZEF0LnRvRGF0ZVN0cmluZygpLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlVwdGltZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7bXModGhpcy5jbGllbnQudXB0aW1lKX1gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlxcdTIwMGJcIixcclxuICAgICAgICAgICAgdmFsdWU6XHJcbiAgICAgICAgICAgICAgXCJbc3VwcG9ydCBzZXJ2ZXJdKGh0dHBzOi8vZGlzY29yZC5nZy9wRHFYcFpBVlBZKSB8IFthZGQgYm90XShodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD04MDYyNDIzODE4NjYyMDUxOTUmcGVybWlzc2lvbnM9MjE0NzQ4MzY0NyZzY29wZT1ib3QpIHwgW3ZvdGUgaGVyZV0oaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlKVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuICAgICAgICAuc2V0Rm9vdGVyKHRoaXMuY2xpZW50LnVzZXIudGFnLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==