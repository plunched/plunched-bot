"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class banCommand extends discord_akairo_1.Command {
    constructor() {
        super("ban", {
            aliases: ["ban", "b"],
            category: "moderation",
            description: {
                content: "Bans a given user.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVyYXRpb24vYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBSXpDLE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUM3QztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1IsV0FBVztvQkFDWCw2QkFBNkI7b0JBQzdCLDBCQUEwQjtpQkFDM0I7YUFDRjtZQUNELElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUU7d0JBQ04sS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FDdEIsR0FBRyxHQUFHLENBQUMsTUFBTSxrQ0FBa0M7d0JBQ2pELEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQ3RCLEdBQUcsR0FBRyxDQUFDLE1BQU0sd0NBQXdDO3FCQUN4RDtpQkFDRjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsb0JBQW9CO2lCQUM5QjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FDVCxPQUFnQixFQUNoQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQTJDO1FBRTNELElBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTztZQUUzQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGO0FBOUNELDZCQThDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgVGVhbU1lbWJlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmFuQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJiYW5cIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJiYW5cIiwgXCJiXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJtb2RlcmF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJCYW5zIGEgZ2l2ZW4gdXNlci5cIixcclxuICAgICAgICB1c2FnZTogXCJiYW4gPHVzZXI+IDxyZWFzb24+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgIFwiYmFuIEB1c2VyXCIsXHJcbiAgICAgICAgICBcImJhbiB1c2VyIzAwMDEgc3BhbW1pbmcgTlNGV1wiLFxyXG4gICAgICAgICAgXCJiYW4gdXNlcklEIHNwYW1taW5nIE5TRldcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICB0eXBlOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PlxyXG4gICAgICAgICAgICAgIGAke21zZy5hdXRob3J9IFBsZWFzZSBwcm92aWRlIGEgbWVtYmVyIHRvIGJhbi5gLFxyXG4gICAgICAgICAgICByZXRyeTogKG1zZzogTWVzc2FnZSkgPT5cclxuICAgICAgICAgICAgICBgJHttc2cuYXV0aG9yfSBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG1lbWJlciB0byBiYW4uYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJyZWFzb25cIixcclxuICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiBcIk5vIHJlYXNvbiBwcm92aWRlZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIHsgbWVtYmVyLCByZWFzb24gfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyOyByZWFzb246IHN0cmluZyB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1lbWJlci5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uID49IG1lc3NhZ2UubWVtYmVyLnJvbGVzLmhpZ2hlc3QucG9zaXRpb24gJiZcclxuICAgICAgbWVzc2FnZS5hdXRob3IuaWQgIT09IG1lc3NhZ2UuZ3VpbGQub3duZXJJRFxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoYFRoaXMgbWVtYmVyIGhhcyBhIGhpZ2hlciByb2xlIHRoZW4geW91IWApO1xyXG4gIH1cclxufVxyXG4iXX0=