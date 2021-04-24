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
            .setTitle(`My uptime:`)
            .setDescription(`${ms(this.client.uptime)}`)
            .setColor(this.client.colors.default)
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = upTimeCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXB0aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2luZm9ybWF0aW9uL3VwdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFDbkQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQXFCLGFBQWMsU0FBUSx3QkFBTztJQUNoRDtRQUNFLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDckIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxLQUFLLEVBQUUsUUFBUTtnQkFDZixRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUNoQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDZixRQUFRLENBQUMsWUFBWSxDQUFDO2FBQ3RCLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXhCRCxnQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmNvbnN0IG1zID0gcmVxdWlyZShcIm1zXCIpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1cFRpbWVDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcInVwVGltZUNvbW1hbmRcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJ1cHRpbWVcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJUZWxscyB5b3UgdGhlIHVwdGltZSBvZiBhIHRoZSBib3Qgc28gZmFyLlwiLFxyXG4gICAgICAgIHVzYWdlOiBcInVwdGltZVwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJ1cHRpbWVcIiwgXCJcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0VGl0bGUoYE15IHVwdGltZTpgKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihgJHttcyh0aGlzLmNsaWVudC51cHRpbWUpfWApXHJcbiAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19