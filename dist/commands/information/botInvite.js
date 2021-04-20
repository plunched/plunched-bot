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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90SW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2luZm9ybWF0aW9uL2JvdEludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixnQkFBaUIsU0FBUSx3QkFBTztJQUNuRDtRQUNFLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDakIsT0FBTyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsZ0JBQWdCO2FBQ2pCO1lBQ0QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO2FBQ25DO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNmOzs7OEJBR3dCLENBQ3pCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE1QkQsbUNBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm90SW52aXRlQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJib3RJbnZpdGVcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXHJcbiAgICAgICAgXCJib3RJbnZpdGVcIixcclxuICAgICAgICBcImJvdC1pbnZpdGVcIixcclxuICAgICAgICBcImludml0ZVwiLFxyXG4gICAgICAgIFwic3VwcG9ydFwiLFxyXG4gICAgICAgIFwic3VwcG9ydC1zZXJ2ZXJcIixcclxuICAgICAgXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcInJldHVybnMgaW52aXRlIG9mIHRoZSBib3RcIixcclxuICAgICAgICB1c2FnZTogXCJib3RJbnZpdGVcIixcclxuICAgICAgICBleGFtcGxlczogW1wiYm90LWludml0ZVwiLCBcImludml0ZVwiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgYF9fKipBZGQgbWUgdG8geW91ciBzZXJ2ZXIqKl9fXHJcbiBodHRwczovL2RzYy5nZy9wbHVuY2hlZC1ib3RcclxuIF9fKipKb2luIG91ciBzdXBwb3J0IHNlcnZlcioqX19cclxuIGh0dHBzOi8vZHNjLmdnL3BsdW5jaGVkLWhlbHBgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=