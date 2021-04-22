"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const ms = require("ms");
class botInfoCommand extends discord_akairo_1.Command {
    constructor() {
        super("botVote", {
            aliases: ["botVote", "bot-vote", "vote"],
            category: "information",
            description: {
                content: "returns the link to invite the bot",
                usage: "bot-Vote",
                examples: ["botVote", "vote"],
            },
            ratelimit: 3,
        });
    }
    exec(message) {
        message.util.send(`**Vote for Plunched bot**
https://discordbotlist.com/bots/plunched-bot/upvote`);
    }
}
exports.default = botInfoCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Vm90ZWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvaW5mb3JtYXRpb24vYm90Vm90ZWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLE1BQXFCLGNBQWUsU0FBUSx3QkFBTztJQUNqRDtRQUNFLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztZQUN4QyxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7YUFDOUI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2Y7b0RBQzhDLENBQy9DLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFwQkQsaUNBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5jb25zdCBtcyA9IHJlcXVpcmUoXCJtc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdEluZm9Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImJvdFZvdGVcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJib3RWb3RlXCIsIFwiYm90LXZvdGVcIiwgXCJ2b3RlXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwicmV0dXJucyB0aGUgbGluayB0byBpbnZpdGUgdGhlIGJvdFwiLFxyXG4gICAgICAgIHVzYWdlOiBcImJvdC1Wb3RlXCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImJvdFZvdGVcIiwgXCJ2b3RlXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBgKipWb3RlIGZvciBQbHVuY2hlZCBib3QqKlxyXG5odHRwczovL2Rpc2NvcmRib3RsaXN0LmNvbS9ib3RzL3BsdW5jaGVkLWJvdC91cHZvdGVgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=