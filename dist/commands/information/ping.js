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
            .setColor(this.client.colors.default)
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = pingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCxpRUFBd0M7QUFFeEMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNuQjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDaEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25DLHFEQUFxRCxDQUN0RCxDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sZ0JBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRXBDLE9BQU8sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDN0IsRUFBRSxFQUNGLElBQUkseUJBQVksRUFBRTthQUNmLFNBQVMsQ0FDUixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDbkQ7YUFDQSxTQUFTLENBQ1I7WUFDRSxJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU07U0FDdEMsRUFDRDtZQUNFLElBQUksRUFBRSxtQkFBbUI7WUFDekIsS0FBSyxFQUFFLEtBQUssTUFBTSxNQUFNO1NBQ3pCLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFDSCx3T0FBd087U0FDM08sQ0FDRjthQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDcEMsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQ3hFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFsREQsOEJBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgZ3VpbGQgZnJvbSBcIi4uLy4uL2NsaWVudC9ndWlsZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcInBpbmdDb21tYW5kXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wicGluZ1wiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkNoZWNrIHRoZSBsYXRlbmN5IG9mIHRoZSBib3QuXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwicGluZ1wiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJwaW5nXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIGNvbnN0IHBpbmdNZXNzYWdlID0gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIGA8YTpkaXNjb3JkX2xvYWRpbmc6ODA5NzMxMzU2MDU3MTQxMjU4PiBmaW5kaW5nIHBpbmdgXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHByZURhdGUgPSBEYXRlLm5vdygpO1xyXG4gICAgYXdhaXQgZ3VpbGQuZmV0Y2gobWVzc2FnZS5ndWlsZC5pZCwgbWVzc2FnZS5ndWlsZC5uYW1lLCBtZXNzYWdlLmF1dGhvci5pZCk7XHJcbiAgICBjb25zdCBkYlBpbmcgPSBEYXRlLm5vdygpIC0gcHJlRGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKGF3YWl0IHBpbmdNZXNzYWdlKS5lZGl0KFxyXG4gICAgICBcIlwiLFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0QXV0aG9yKFxyXG4gICAgICAgICAgbWVzc2FnZS5tZW1iZXIudXNlci50YWcsXHJcbiAgICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICAuYWRkRmllbGRzKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImFwaSBsYXRlbmN5OlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYFxcYCR7dGhpcy5jbGllbnQud3MucGluZ31tc1xcYGAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImRhdGFiYXNlIGxhdGVuY3k6XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgXFxgJHtkYlBpbmd9bXNcXGBgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJcXHUyMDBiXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOlxyXG4gICAgICAgICAgICAgIFwiW3N1cHBvcnQgc2VydmVyXShodHRwczovL2Rpc2NvcmQuZ2cvcERxWHBaQVZQWSkgfCBbYWRkIGJvdF0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9ODA2MjQyMzgxODY2MjA1MTk1JnBlcm1pc3Npb25zPTIxNDc0ODM2NDcmc2NvcGU9Ym90KSB8IFt2b3RlIGhlcmVdKGh0dHBzOi8vZGlzY29yZGJvdGxpc3QuY29tL2JvdHMvcGx1bmNoZWQtYm90L3Vwdm90ZSlcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19