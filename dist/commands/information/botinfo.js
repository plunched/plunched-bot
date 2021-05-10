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
                content: "Gives you info about the bot.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9ib3RpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBcUIsY0FBZSxTQUFRLHdCQUFPO0lBQ2pEO1FBQ0UsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUM5QjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUMxQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDZixTQUFTLENBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ25EO2FBQ0EsUUFBUSxDQUFDLHFCQUFxQixDQUFDO2FBQy9CLGNBQWMsQ0FBQyxpREFBaUQsQ0FBQzthQUNqRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFNBQVMsQ0FDUjtZQUNFLElBQUksRUFBRSxVQUFVO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNwQyxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDbkMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3RDLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSTtZQUNqQyxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQzVDLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEMsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxLQUFLLEVBQ0gsd09BQXdPO1NBQzNPLENBQ0Y7YUFDQSxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWpFRCxpQ0FpRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmNvbnN0IG1zID0gcmVxdWlyZShcIm1zXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm90SW5mb0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiYm90aW5mb1wiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcImJvdGluZm9cIiwgXCJib3QtaW5mb1wiLCBcImluZm9cIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJHaXZlcyB5b3UgaW5mbyBhYm91dCB0aGUgYm90LlwiLFxyXG4gICAgICAgIHVzYWdlOiBcImJvdC1pbmZvXCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImJvdGluZm9cIiwgXCJpbmZvXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldEF1dGhvcihcclxuICAgICAgICAgIG1lc3NhZ2UubWVtYmVyLnVzZXIudGFnLFxyXG4gICAgICAgICAgbWVzc2FnZS5hdXRob3IuZGlzcGxheUF2YXRhclVSTCh7IGR5bmFtaWM6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnNldFRpdGxlKFwiUGx1bmNoZWQtYm90J3MgaW5mb1wiKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihcIlRoaXMgYm90IHdhcyBkZXZlbG9wZWQgYnkgPEA1MzE5NTM3Mzg0OTE4ODc2Mjc+XCIpXHJcbiAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICAgIC5hZGRGaWVsZHMoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IGBzZXJ2ZXJzOmAsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNsaWVudC5ndWlsZHMuY2FjaGUuc2l6ZSxcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJNZW1iZXJzOlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5jbGllbnQudXNlcnMuY2FjaGUuc2l6ZSxcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJjaGFubmVsczpcIixcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuY2xpZW50LmNoYW5uZWxzLmNhY2hlLnNpemUsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBpIHBpbmc6XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHt0aGlzLmNsaWVudC53cy5waW5nfW1zYCxcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogYEpvaW4gZGF0ZTpgLFxyXG4gICAgICAgICAgICB2YWx1ZTogbWVzc2FnZS5ndWlsZC5qb2luZWRBdC50b0RhdGVTdHJpbmcoKSxcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJVcHRpbWVcIixcclxuICAgICAgICAgICAgdmFsdWU6IGAke21zKHRoaXMuY2xpZW50LnVwdGltZSl9YCxcclxuICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJcXHUyMDBiXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOlxyXG4gICAgICAgICAgICAgIFwiW3N1cHBvcnQgc2VydmVyXShodHRwczovL2Rpc2NvcmQuZ2cvcERxWHBaQVZQWSkgfCBbYWRkIGJvdF0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9ODA2MjQyMzgxODY2MjA1MTk1JnBlcm1pc3Npb25zPTIxNDc0ODM2NDcmc2NvcGU9Ym90KSB8IFt2b3RlIGhlcmVdKGh0dHBzOi8vZGlzY29yZGJvdGxpc3QuY29tL2JvdHMvcGx1bmNoZWQtYm90L3Vwdm90ZSlcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnNldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgLnNldEZvb3Rlcih0aGlzLmNsaWVudC51c2VyLnRhZywgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=