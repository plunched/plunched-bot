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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Vm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9ib3RWb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBRXpDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixNQUFxQixjQUFlLFNBQVEsd0JBQU87SUFDakQ7UUFDRSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7WUFDeEMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxvQ0FBb0M7Z0JBQzdDLEtBQUssRUFBRSxVQUFVO2dCQUNqQixRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO2FBQzlCO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNmO29EQUM4QyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBcEJELGlDQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuY29uc3QgbXMgPSByZXF1aXJlKFwibXNcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBib3RJbmZvQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJib3RWb3RlXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiYm90Vm90ZVwiLCBcImJvdC12b3RlXCIsIFwidm90ZVwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcInJldHVybnMgdGhlIGxpbmsgdG8gaW52aXRlIHRoZSBib3RcIixcclxuICAgICAgICB1c2FnZTogXCJib3QtVm90ZVwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJib3RWb3RlXCIsIFwidm90ZVwiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgYCoqVm90ZSBmb3IgUGx1bmNoZWQgYm90KipcclxuaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19