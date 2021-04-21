"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class botInviteCommand extends discord_akairo_1.Command {
    constructor() {
        super("botInvite", {
            aliases: [
                "botInvite",
                "bot-invite",
                "invite",
                "support",
                "support-server",
            ],
            category: "information",
            description: {
                content: "returns invite of the bot",
                usage: "botInvite",
                examples: ["bot-invite", "invite"],
            },
            ratelimit: 3,
        });
    }
    exec(message) {
        message.util.send(`__**Add me to your server**__
 https://dsc.gg/plunched-bot
 __**Join our support server**__
 https://dsc.gg/plunched-help`);
    }
}
exports.default = botInviteCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90SW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2luZm9ybWF0aW9uL2JvdEludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixnQkFBaUIsU0FBUSx3QkFBTztJQUNuRDtRQUNFLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDakIsT0FBTyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsZ0JBQWdCO2FBQ2pCO1lBQ0QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO2FBQ25DO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNmOzs7OEJBR3dCLENBQ3pCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE1QkQsbUNBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvdEludml0ZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiYm90SW52aXRlXCIsIHtcclxuICAgICAgYWxpYXNlczogW1xyXG4gICAgICAgIFwiYm90SW52aXRlXCIsXHJcbiAgICAgICAgXCJib3QtaW52aXRlXCIsXHJcbiAgICAgICAgXCJpbnZpdGVcIixcclxuICAgICAgICBcInN1cHBvcnRcIixcclxuICAgICAgICBcInN1cHBvcnQtc2VydmVyXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJyZXR1cm5zIGludml0ZSBvZiB0aGUgYm90XCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiYm90SW52aXRlXCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImJvdC1pbnZpdGVcIiwgXCJpbnZpdGVcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIGBfXyoqQWRkIG1lIHRvIHlvdXIgc2VydmVyKipfX1xyXG4gaHR0cHM6Ly9kc2MuZ2cvcGx1bmNoZWQtYm90XHJcbiBfXyoqSm9pbiBvdXIgc3VwcG9ydCBzZXJ2ZXIqKl9fXHJcbiBodHRwczovL2RzYy5nZy9wbHVuY2hlZC1oZWxwYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19