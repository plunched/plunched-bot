"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class botInfoCommand extends discord_akairo_1.Command {
    constructor() {
        super("botVote", {
            aliases: ["botVote", "bot-vote", "vote"],
            category: "information",
            description: {
                content: "Gives you the link to vote for the bot.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Vm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9ib3RWb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLE1BQXFCLGNBQWUsU0FBUSx3QkFBTztJQUNqRDtRQUNFLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQztZQUN4QyxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLHlDQUF5QztnQkFDbEQsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7YUFDOUI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2Y7b0RBQzhDLENBQy9DLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFwQkQsaUNBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdEluZm9Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImJvdFZvdGVcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJib3RWb3RlXCIsIFwiYm90LXZvdGVcIiwgXCJ2b3RlXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiR2l2ZXMgeW91IHRoZSBsaW5rIHRvIHZvdGUgZm9yIHRoZSBib3QuXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiYm90LVZvdGVcIixcclxuICAgICAgICBleGFtcGxlczogW1wiYm90Vm90ZVwiLCBcInZvdGVcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIGAqKlZvdGUgZm9yIFBsdW5jaGVkIGJvdCoqXHJcbmh0dHBzOi8vZGlzY29yZGJvdGxpc3QuY29tL2JvdHMvcGx1bmNoZWQtYm90L3Vwdm90ZWBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==