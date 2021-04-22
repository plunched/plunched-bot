"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class banCommand extends discord_akairo_1.Command {
    constructor() {
        super("ban", {
            aliases: ["ban", "b"],
            category: "moderation",
            description: {
                content: "bans a given user",
                usage: "ban <user> <reason>",
                examples: [
                    "ban @user",
                    "ban user#0001 spamming NSFW",
                    "ban userID spamming NSFW",
                ],
            },
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    prompt: {
                        start: (msg) => `${msg.author} Please provide a member to ban.`,
                        retry: (msg) => `${msg.author} Please provide a valid member to ban.`,
                    },
                },
                {
                    id: "reason",
                    type: "string",
                    match: "rest",
                    default: "No reason provided",
                },
            ],
        });
    }
    exec(message, { member, reason }) {
        if (member.roles.highest.position >= message.member.roles.highest.position &&
            message.author.id !== message.guild.ownerID)
            return message.util.send(`This member has a higher role then you!`);
    }
}
exports.default = banCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVyYXRpb24vYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBSXpDLE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUM3QztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1IsV0FBVztvQkFDWCw2QkFBNkI7b0JBQzdCLDBCQUEwQjtpQkFDM0I7YUFDRjtZQUNELElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUU7d0JBQ04sS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FDdEIsR0FBRyxHQUFHLENBQUMsTUFBTSxrQ0FBa0M7d0JBQ2pELEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQ3RCLEdBQUcsR0FBRyxDQUFDLE1BQU0sd0NBQXdDO3FCQUN4RDtpQkFDRjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsb0JBQW9CO2lCQUM5QjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FDVCxPQUFnQixFQUNoQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQTJDO1FBRTNELElBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTztZQUUzQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGO0FBOUNELDZCQThDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgVGVhbU1lbWJlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmFuQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJiYW5cIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJiYW5cIiwgXCJiXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJtb2RlcmF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJiYW5zIGEgZ2l2ZW4gdXNlclwiLFxyXG4gICAgICAgIHVzYWdlOiBcImJhbiA8dXNlcj4gPHJlYXNvbj5cIixcclxuICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgXCJiYW4gQHVzZXJcIixcclxuICAgICAgICAgIFwiYmFuIHVzZXIjMDAwMSBzcGFtbWluZyBOU0ZXXCIsXHJcbiAgICAgICAgICBcImJhbiB1c2VySUQgc3BhbW1pbmcgTlNGV1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJtZW1iZXJcIixcclxuICAgICAgICAgIHR5cGU6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+XHJcbiAgICAgICAgICAgICAgYCR7bXNnLmF1dGhvcn0gUGxlYXNlIHByb3ZpZGUgYSBtZW1iZXIgdG8gYmFuLmAsXHJcbiAgICAgICAgICAgIHJldHJ5OiAobXNnOiBNZXNzYWdlKSA9PlxyXG4gICAgICAgICAgICAgIGAke21zZy5hdXRob3J9IFBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbWVtYmVyIHRvIGJhbi5gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcInJlYXNvblwiLFxyXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwiTm8gcmVhc29uIHByb3ZpZGVkXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBtZW1iZXIsIHJlYXNvbiB9OiB7IG1lbWJlcjogR3VpbGRNZW1iZXI7IHJlYXNvbjogc3RyaW5nIH1cclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIGlmIChcclxuICAgICAgbWVtYmVyLnJvbGVzLmhpZ2hlc3QucG9zaXRpb24gPj0gbWVzc2FnZS5tZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiAmJlxyXG4gICAgICBtZXNzYWdlLmF1dGhvci5pZCAhPT0gbWVzc2FnZS5ndWlsZC5vd25lcklEXHJcbiAgICApXHJcbiAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgVGhpcyBtZW1iZXIgaGFzIGEgaGlnaGVyIHJvbGUgdGhlbiB5b3UhYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==