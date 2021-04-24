"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const ms = require("ms");
class upTimeCommand extends discord_akairo_1.Command {
    constructor() {
        super("upTimeCommand", {
            aliases: ["uptime"],
            category: "information",
            description: {
                content: "Tells you the uptime of a the bot so far.",
                usage: "uptime",
                examples: ["uptime", ""],
            },
            ratelimit: 3,
        });
    }
    async exec(message) {
        return message.util.send(new discord_js_1.MessageEmbed()
            .setColor(this.client.colors.default)
            .setTitle(`My uptime:`)
            .setDescription(`${ms(this.client.uptime)}`)
            .setColor(this.client.colors.default)
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = upTimeCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXB0aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2luZm9ybWF0aW9uL3VwdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFDbkQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQXFCLGFBQWMsU0FBUSx3QkFBTztJQUNoRDtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDckIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxLQUFLLEVBQUUsUUFBUTtnQkFDZixRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUNoQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDZixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFFBQVEsQ0FBQyxZQUFZLENBQUM7YUFDdEIsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQzthQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBekJELGdDQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuY29uc3QgbXMgPSByZXF1aXJlKFwibXNcIik7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHVwVGltZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwidXBUaW1lQ29tbWFuZFwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcInVwdGltZVwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIlRlbGxzIHlvdSB0aGUgdXB0aW1lIG9mIGEgdGhlIGJvdCBzbyBmYXIuXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwidXB0aW1lXCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcInVwdGltZVwiLCBcIlwiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAuc2V0VGl0bGUoYE15IHVwdGltZTpgKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihgJHttcyh0aGlzLmNsaWVudC51cHRpbWUpfWApXHJcbiAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19