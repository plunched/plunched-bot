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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9tb2RlcmF0aW9uL2JhbkNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFJekMsTUFBcUIsVUFBVyxTQUFRLHdCQUFPO0lBQzdDO1FBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDckIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLFFBQVEsRUFBRTtvQkFDUixXQUFXO29CQUNYLDZCQUE2QjtvQkFDN0IsMEJBQTBCO2lCQUMzQjthQUNGO1lBQ0QsSUFBSSxFQUFFO2dCQUNKO29CQUNFLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRTt3QkFDTixLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUN0QixHQUFHLEdBQUcsQ0FBQyxNQUFNLGtDQUFrQzt3QkFDakQsS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FDdEIsR0FBRyxHQUFHLENBQUMsTUFBTSx3Q0FBd0M7cUJBQ3hEO2lCQUNGO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxvQkFBb0I7aUJBQzlCO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUNULE9BQWdCLEVBQ2hCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBMkM7UUFFM0QsSUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFDdEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBRTNDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0Y7QUE5Q0QsNkJBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBUZWFtTWVtYmVyIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYW5Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImJhblwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcImJhblwiLCBcImJcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcIm1vZGVyYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcImJhbnMgYSBnaXZlbiB1c2VyXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiYmFuIDx1c2VyPiA8cmVhc29uPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICBcImJhbiBAdXNlclwiLFxyXG4gICAgICAgICAgXCJiYW4gdXNlciMwMDAxIHNwYW1taW5nIE5TRldcIixcclxuICAgICAgICAgIFwiYmFuIHVzZXJJRCBzcGFtbWluZyBOU0ZXXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgICBzdGFydDogKG1zZzogTWVzc2FnZSkgPT5cclxuICAgICAgICAgICAgICBgJHttc2cuYXV0aG9yfSBQbGVhc2UgcHJvdmlkZSBhIG1lbWJlciB0byBiYW4uYCxcclxuICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+XHJcbiAgICAgICAgICAgICAgYCR7bXNnLmF1dGhvcn0gUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBtZW1iZXIgdG8gYmFuLmAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwicmVhc29uXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCJObyByZWFzb24gcHJvdmlkZWRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IG1lbWJlciwgcmVhc29uIH06IHsgbWVtYmVyOiBHdWlsZE1lbWJlcjsgcmVhc29uOiBzdHJpbmcgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBtZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiA+PSBtZXNzYWdlLm1lbWJlci5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uICYmXHJcbiAgICAgIG1lc3NhZ2UuYXV0aG9yLmlkICE9PSBtZXNzYWdlLmd1aWxkLm93bmVySURcclxuICAgIClcclxuICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGBUaGlzIG1lbWJlciBoYXMgYSBoaWdoZXIgcm9sZSB0aGVuIHlvdSFgKTtcclxuICB9XHJcbn1cclxuIl19