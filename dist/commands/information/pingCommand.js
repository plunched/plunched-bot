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
        await guilds_1.default.fetch(message.guild.id, message.guild.name, message.author.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvaW5mb3JtYXRpb24vcGluZ0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBQ25ELGlFQUF3QztBQUV4QyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDOUM7UUFDRSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUNoQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkMscURBQXFELENBQ3RELENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsTUFBTSxnQkFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFFcEMsT0FBTyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM3QixFQUFFLEVBQ0YsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsU0FBUyxDQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFNBQVMsQ0FDUjtZQUNFLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTTtTQUN0QyxFQUNEO1lBQ0UsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixLQUFLLEVBQUUsS0FBSyxNQUFNLE1BQU07U0FDekIsRUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUNILHdPQUF3TztTQUMzTyxDQUNGO2FBQ0EsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUNsQixZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWxERCw4QkFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCBndWlsZCBmcm9tIFwiLi4vLi4vY2xpZW50L2d1aWxkc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGluZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwicGluZ0NvbW1hbmRcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJwaW5nXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiQ2hlY2sgdGhlIGxhdGVuY3kgb2YgdGhlIGJvdFwiLFxyXG4gICAgICAgIHVzYWdlOiBcInBpbmdcIixcclxuICAgICAgICBleGFtcGxlczogW1wicGluZ1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBjb25zdCBwaW5nTWVzc2FnZSA9IG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBgPGE6ZGlzY29yZF9sb2FkaW5nOjgwOTczMTM1NjA1NzE0MTI1OD4gZmluZGluZyBwaW5nYFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwcmVEYXRlID0gRGF0ZS5ub3coKTtcclxuICAgIGF3YWl0IGd1aWxkLmZldGNoKG1lc3NhZ2UuZ3VpbGQuaWQsIG1lc3NhZ2UuZ3VpbGQubmFtZSwgbWVzc2FnZS5hdXRob3IuaWQpO1xyXG4gICAgY29uc3QgZGJQaW5nID0gRGF0ZS5ub3coKSAtIHByZURhdGU7XHJcblxyXG4gICAgcmV0dXJuIChhd2FpdCBwaW5nTWVzc2FnZSkuZWRpdChcclxuICAgICAgXCJcIixcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldEF1dGhvcihcclxuICAgICAgICAgIG1lc3NhZ2UubWVtYmVyLnVzZXIudGFnLFxyXG4gICAgICAgICAgbWVzc2FnZS5hdXRob3IuZGlzcGxheUF2YXRhclVSTCh7IGR5bmFtaWM6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLmFkZEZpZWxkcyhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJhcGkgbGF0ZW5jeTpcIixcclxuICAgICAgICAgICAgdmFsdWU6IGBcXGAke3RoaXMuY2xpZW50LndzLnBpbmd9bXNcXGBgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJkYXRhYmFzZSBsYXRlbmN5OlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYFxcYCR7ZGJQaW5nfW1zXFxgYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiXFx1MjAwYlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTpcclxuICAgICAgICAgICAgICBcIltzdXBwb3J0IHNlcnZlcl0oaHR0cHM6Ly9kaXNjb3JkLmdnL3BEcVhwWkFWUFkpIHwgW2FkZCBib3RdKGh0dHBzOi8vZGlzY29yZC5jb20vYXBpL29hdXRoMi9hdXRob3JpemU/Y2xpZW50X2lkPTgwNjI0MjM4MTg2NjIwNTE5NSZwZXJtaXNzaW9ucz0yMTQ3NDgzNjQ3JnNjb3BlPWJvdCkgfCBbdm90ZSBoZXJlXShodHRwczovL2Rpc2NvcmRib3RsaXN0LmNvbS9ib3RzL3BsdW5jaGVkLWJvdC91cHZvdGUpXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIjczOGFkYlwiKVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19