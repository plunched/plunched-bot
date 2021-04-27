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
                Permissions: "Ban members or moderator role!",
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
            userPermissions: "BAN_MEMBERS",
        });
    }
    exec(message, { member, reason }) {
        if (member.roles.highest.position >= message.member.roles.highest.position &&
            message.author.id !== message.guild.ownerID)
            return message.util.send(`This member has a higher role then you!`);
    }
}
exports.default = banCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVyYXRpb24vYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBSXpDLE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUM3QztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1IsV0FBVztvQkFDWCw2QkFBNkI7b0JBQzdCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsV0FBVyxFQUFFLGdDQUFnQzthQUM5QztZQUNELElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUU7d0JBQ04sS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FDdEIsR0FBRyxHQUFHLENBQUMsTUFBTSxrQ0FBa0M7d0JBQ2pELEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQ3RCLEdBQUcsR0FBRyxDQUFDLE1BQU0sd0NBQXdDO3FCQUN4RDtpQkFDRjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsb0JBQW9CO2lCQUM5QjthQUNGO1lBQ0QsZUFBZSxFQUFFLGFBQWE7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FDVCxPQUFnQixFQUNoQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQTJDO1FBRTNELElBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTztZQUUzQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGO0FBaERELDZCQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgVGVhbU1lbWJlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmFuQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJiYW5cIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJiYW5cIiwgXCJiXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJtb2RlcmF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJCYW5zIGEgZ2l2ZW4gdXNlci5cIixcclxuICAgICAgICB1c2FnZTogXCJiYW4gPHVzZXI+IDxyZWFzb24+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgIFwiYmFuIEB1c2VyXCIsXHJcbiAgICAgICAgICBcImJhbiB1c2VyIzAwMDEgc3BhbW1pbmcgTlNGV1wiLFxyXG4gICAgICAgICAgXCJiYW4gdXNlcklEIHNwYW1taW5nIE5TRldcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIFBlcm1pc3Npb25zOiBcIkJhbiBtZW1iZXJzIG9yIG1vZGVyYXRvciByb2xlIVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICB0eXBlOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PlxyXG4gICAgICAgICAgICAgIGAke21zZy5hdXRob3J9IFBsZWFzZSBwcm92aWRlIGEgbWVtYmVyIHRvIGJhbi5gLFxyXG4gICAgICAgICAgICByZXRyeTogKG1zZzogTWVzc2FnZSkgPT5cclxuICAgICAgICAgICAgICBgJHttc2cuYXV0aG9yfSBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG1lbWJlciB0byBiYW4uYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJyZWFzb25cIixcclxuICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiBcIk5vIHJlYXNvbiBwcm92aWRlZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHVzZXJQZXJtaXNzaW9uczogXCJCQU5fTUVNQkVSU1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IG1lbWJlciwgcmVhc29uIH06IHsgbWVtYmVyOiBHdWlsZE1lbWJlcjsgcmVhc29uOiBzdHJpbmcgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBtZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiA+PSBtZXNzYWdlLm1lbWJlci5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uICYmXHJcbiAgICAgIG1lc3NhZ2UuYXV0aG9yLmlkICE9PSBtZXNzYWdlLmd1aWxkLm93bmVySURcclxuICAgIClcclxuICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGBUaGlzIG1lbWJlciBoYXMgYSBoaWdoZXIgcm9sZSB0aGVuIHlvdSFgKTtcclxuICB9XHJcbn1cclxuIl19