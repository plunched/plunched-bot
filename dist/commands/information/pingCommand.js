"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const guilds_1 = __importDefault(require("../../client/guilds"));
class pingCommand extends discord_akairo_1.Command {
    constructor() {
        super("pingCommand", {
            aliases: ["ping"],
            category: "information",
            description: {
                content: "Check the latency of the bot",
                usage: "ping",
                examples: ["ping"],
            },
            ratelimit: 3,
        });
    }
    async exec(message) {
        const pingMessage = message.util.send(`<a:discord_loading:809731356057141258> finding ping`);
        const preDate = Date.now();
        await guilds_1.default.fetch(message.guild.id, message.guild.name);
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
            .setColor("738adb")
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = pingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvaW5mb3JtYXRpb24vcGluZ0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBQ25ELGlFQUF3QztBQUV4QyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDOUM7UUFDRSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUNoQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkMscURBQXFELENBQ3RELENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsTUFBTSxnQkFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFFcEMsT0FBTyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM3QixFQUFFLEVBQ0YsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsU0FBUyxDQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFNBQVMsQ0FDUjtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTTtTQUN0QyxFQUNEO1lBQ0UsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixLQUFLLEVBQUUsS0FBSyxNQUFNLE1BQU07U0FDekIsRUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUNILHdPQUF3TztTQUMzTyxDQUNGO2FBQ0EsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUNsQixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWxERCw4QkFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCBndWlsZCBmcm9tIFwiLi4vLi4vY2xpZW50L2d1aWxkc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGluZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwicGluZ0NvbW1hbmRcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJwaW5nXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiQ2hlY2sgdGhlIGxhdGVuY3kgb2YgdGhlIGJvdFwiLFxyXG4gICAgICAgIHVzYWdlOiBcInBpbmdcIixcclxuICAgICAgICBleGFtcGxlczogW1wicGluZ1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBjb25zdCBwaW5nTWVzc2FnZSA9IG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBgPGE6ZGlzY29yZF9sb2FkaW5nOjgwOTczMTM1NjA1NzE0MTI1OD4gZmluZGluZyBwaW5nYFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwcmVEYXRlID0gRGF0ZS5ub3coKTtcclxuICAgIGF3YWl0IGd1aWxkLmZldGNoKG1lc3NhZ2UuZ3VpbGQuaWQsIG1lc3NhZ2UuZ3VpbGQubmFtZSk7XHJcbiAgICBjb25zdCBkYlBpbmcgPSBEYXRlLm5vdygpIC0gcHJlRGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKGF3YWl0IHBpbmdNZXNzYWdlKS5lZGl0KFxyXG4gICAgICBcIlwiLFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0QXV0aG9yKFxyXG4gICAgICAgICAgbWVzc2FnZS5tZW1iZXIudXNlci50YWcsXHJcbiAgICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICAuYWRkRmllbGRzKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImFwaSBsYXRlbmN5OlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYFxcYCR7dGhpcy5jbGllbnQud3MucGluZ31tc1xcYGAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImRhdGFiYXNlIGxhdGVuY3k6XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgXFxgJHtkYlBpbmd9bXNcXGBgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJcXHUyMDBiXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOlxyXG4gICAgICAgICAgICAgIFwiW3N1cHBvcnQgc2VydmVyXShodHRwczovL2Rpc2NvcmQuZ2cvcERxWHBaQVZQWSkgfCBbYWRkIGJvdF0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9ODA2MjQyMzgxODY2MjA1MTk1JnBlcm1pc3Npb25zPTIxNDc0ODM2NDcmc2NvcGU9Ym90KSB8IFt2b3RlIGhlcmVdKGh0dHBzOi8vZGlzY29yZGJvdGxpc3QuY29tL2JvdHMvcGx1bmNoZWQtYm90L3Vwdm90ZSlcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnNldENvbG9yKFwiNzM4YWRiXCIpXHJcbiAgICAgICAgLnNldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgLnNldEZvb3Rlcih0aGlzLmNsaWVudC51c2VyLnRhZywgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=