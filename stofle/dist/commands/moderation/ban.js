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
        return message.util.send("Moderation commands are coming soon");
    }
}
exports.default = banCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL21vZGVyYXRpb24vYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBSXpDLE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUM3QztRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1IsV0FBVztvQkFDWCw2QkFBNkI7b0JBQzdCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsV0FBVyxFQUFFLGdDQUFnQzthQUM5QztZQUNELElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUU7d0JBQ04sS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FDdEIsR0FBRyxHQUFHLENBQUMsTUFBTSxrQ0FBa0M7d0JBQ2pELEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQ3RCLEdBQUcsR0FBRyxDQUFDLE1BQU0sd0NBQXdDO3FCQUN4RDtpQkFDRjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsb0JBQW9CO2lCQUM5QjthQUNGO1lBQ0QsZUFBZSxFQUFFLGFBQWE7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FDVCxPQUFnQixFQUNoQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQTJDO1FBRTNELElBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTztZQUUzQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFFdEUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDRjtBQWxERCw2QkFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IFRlYW1NZW1iZXIgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBHdWlsZE1lbWJlciwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhbkNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiYmFuXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiYmFuXCIsIFwiYlwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwibW9kZXJhdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiQmFucyBhIGdpdmVuIHVzZXIuXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiYmFuIDx1c2VyPiA8cmVhc29uPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICBcImJhbiBAdXNlclwiLFxyXG4gICAgICAgICAgXCJiYW4gdXNlciMwMDAxIHNwYW1taW5nIE5TRldcIixcclxuICAgICAgICAgIFwiYmFuIHVzZXJJRCBzcGFtbWluZyBOU0ZXXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBQZXJtaXNzaW9uczogXCJCYW4gbWVtYmVycyBvciBtb2RlcmF0b3Igcm9sZSFcIixcclxuICAgICAgfSxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgICBzdGFydDogKG1zZzogTWVzc2FnZSkgPT5cclxuICAgICAgICAgICAgICBgJHttc2cuYXV0aG9yfSBQbGVhc2UgcHJvdmlkZSBhIG1lbWJlciB0byBiYW4uYCxcclxuICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+XHJcbiAgICAgICAgICAgICAgYCR7bXNnLmF1dGhvcn0gUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBtZW1iZXIgdG8gYmFuLmAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwicmVhc29uXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCJObyByZWFzb24gcHJvdmlkZWRcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB1c2VyUGVybWlzc2lvbnM6IFwiQkFOX01FTUJFUlNcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBtZW1iZXIsIHJlYXNvbiB9OiB7IG1lbWJlcjogR3VpbGRNZW1iZXI7IHJlYXNvbjogc3RyaW5nIH1cclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIGlmIChcclxuICAgICAgbWVtYmVyLnJvbGVzLmhpZ2hlc3QucG9zaXRpb24gPj0gbWVzc2FnZS5tZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiAmJlxyXG4gICAgICBtZXNzYWdlLmF1dGhvci5pZCAhPT0gbWVzc2FnZS5ndWlsZC5vd25lcklEXHJcbiAgICApXHJcbiAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgVGhpcyBtZW1iZXIgaGFzIGEgaGlnaGVyIHJvbGUgdGhlbiB5b3UhYCk7XHJcblxyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFwiTW9kZXJhdGlvbiBjb21tYW5kcyBhcmUgY29taW5nIHNvb25cIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==