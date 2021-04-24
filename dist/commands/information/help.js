"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class helpCommand extends discord_akairo_1.Command {
    constructor() {
        super("help", {
            aliases: ["help", "commands", "cmds"],
            category: "information",
            description: {
                content: "Helps you out with any command",
                usage: "help <command | sub-module>",
                examples: ["links", "help ping"],
            },
            ratelimit: 3,
            args: [
                {
                    id: "command",
                    type: "commandAlias",
                },
            ],
        });
    }
    exec(message, { command }) {
        if (command)
            return message.util.send(new discord_js_1.MessageEmbed()
                .setTitle(`Help ${command}`)
                .setDescription(`\n${command.description.content || "No description provided."}

      **usage:**\n\`${command.description.usage || "No usage provide."}\`

      **examples:**\n\`${command.description.examples
                ? command.description.examples.map((e) => `${e}`).join("\n")
                : "No examples provided."}\``)
                .setColor(this.client.colors.default));
        return message.util.send(new discord_js_1.MessageEmbed()
            .setTitle("Help")
            .setDescription(`**usage:**\n\`${message.util.parsed.prefix}${this.description.usage}\``)
            .addFields({
            name: "moderation",
            value: `moderation commands are used to 'correct' members of a server.`,
            inline: true,
        }, {
            name: "auto-mod",
            value: `auto-moderation commands are used to automate moderation.`,
            inline: true,
        }, {
            name: "info",
            value: `info commands are used to get information about anything.`,
            inline: true,
        }, {
            name: "economy",
            value: `economy commands are used to gain coins and items.`,
            inline: true,
        }, {
            name: "trivia/fun",
            value: `trivia commands are used to do thing things which amuses people.`,
            inline: true,
        }, {
            name: "config",
            value: `config commands are used to set up bot settings for this server.`,
            inline: true,
        }, {
            name: "\u200b",
            value: "[support server](https://discord.gg/pdqxpzavpy) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)",
        }));
        return message.util.send(new discord_js_1.MessageEmbed()
            .setTitle(`No command found`)
            .setDescription(`${this.client.emotes.error} Could not find the command \`${command}\``)
            .setColor(this.client.colors.default));
    }
}
exports.default = helpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDOUM7UUFDRSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7WUFDckMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSw2QkFBNkI7Z0JBQ3BDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7YUFDakM7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsU0FBUztvQkFDYixJQUFJLEVBQUUsY0FBYztpQkFDckI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxPQUFPLEVBQXdCO1FBRWpDLElBQUksT0FBTztZQUNULE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUkseUJBQVksRUFBRTtpQkFDZixRQUFRLENBQUMsUUFBUSxPQUFPLEVBQUUsQ0FBQztpQkFDM0IsY0FBYyxDQUNiLEtBQUssT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksMEJBQTBCOztzQkFFcEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksbUJBQW1COzt5QkFHOUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRO2dCQUMxQixDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUQsQ0FBQyxDQUFDLHVCQUNOLElBQUksQ0FDQztpQkFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ3hDLENBQUM7UUFFSixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDZixRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hCLGNBQWMsQ0FDYixpQkFBaUIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLENBQ3pFO2FBQ0EsU0FBUyxDQUNSO1lBQ0UsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLGdFQUFnRTtZQUN2RSxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsMkRBQTJEO1lBQ2xFLE1BQU0sRUFBRSxJQUFJO1NBQ2IsRUFDRDtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLDJEQUEyRDtZQUNsRSxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxvREFBb0Q7WUFDM0QsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLGtFQUFrRTtZQUN6RSxNQUFNLEVBQUUsSUFBSTtTQUNiLEVBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxrRUFBa0U7WUFDekUsTUFBTSxFQUFFLElBQUk7U0FDYixFQUNEO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxLQUFLLEVBQ0gsd09BQXdPO1NBQzNPLENBQ0YsQ0FDSixDQUFDO1FBRUYsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEIsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2FBQzVCLGNBQWMsQ0FDYixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssaUNBQWlDLE9BQU8sSUFBSSxDQUN4RTthQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWhHRCw4QkFnR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBoZWxwQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJoZWxwXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiaGVscFwiLCBcImNvbW1hbmRzXCIsIFwiY21kc1wiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkhlbHBzIHlvdSBvdXQgd2l0aCBhbnkgY29tbWFuZFwiLFxyXG4gICAgICAgIHVzYWdlOiBcImhlbHAgPGNvbW1hbmQgfCBzdWItbW9kdWxlPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJsaW5rc1wiLCBcImhlbHAgcGluZ1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiY29tbWFuZFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJjb21tYW5kQWxpYXNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IGNvbW1hbmQgfTogeyBjb21tYW5kOiBDb21tYW5kIH1cclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIGlmIChjb21tYW5kKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAuc2V0VGl0bGUoYEhlbHAgJHtjb21tYW5kfWApXHJcbiAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXHJcbiAgICAgICAgICAgIGBcXG4ke2NvbW1hbmQuZGVzY3JpcHRpb24uY29udGVudCB8fCBcIk5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkLlwifVxyXG5cclxuICAgICAgKip1c2FnZToqKlxcblxcYCR7Y29tbWFuZC5kZXNjcmlwdGlvbi51c2FnZSB8fCBcIk5vIHVzYWdlIHByb3ZpZGUuXCJ9XFxgXHJcblxyXG4gICAgICAqKmV4YW1wbGVzOioqXFxuXFxgJHtcclxuICAgICAgICBjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzXHJcbiAgICAgICAgICA/IGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMubWFwKChlKSA9PiBgJHtlfWApLmpvaW4oXCJcXG5cIilcclxuICAgICAgICAgIDogXCJObyBleGFtcGxlcyBwcm92aWRlZC5cIlxyXG4gICAgICB9XFxgYFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICApO1xyXG5cclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldFRpdGxlKFwiSGVscFwiKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihcclxuICAgICAgICAgIGAqKnVzYWdlOioqXFxuXFxgJHttZXNzYWdlLnV0aWwucGFyc2VkLnByZWZpeH0ke3RoaXMuZGVzY3JpcHRpb24udXNhZ2V9XFxgYFxyXG4gICAgICAgIClcclxuICAgICAgICAuYWRkRmllbGRzKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVyYXRpb25cIixcclxuICAgICAgICAgICAgdmFsdWU6IGBtb2RlcmF0aW9uIGNvbW1hbmRzIGFyZSB1c2VkIHRvICdjb3JyZWN0JyBtZW1iZXJzIG9mIGEgc2VydmVyLmAsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXV0by1tb2RcIixcclxuICAgICAgICAgICAgdmFsdWU6IGBhdXRvLW1vZGVyYXRpb24gY29tbWFuZHMgYXJlIHVzZWQgdG8gYXV0b21hdGUgbW9kZXJhdGlvbi5gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImluZm9cIixcclxuICAgICAgICAgICAgdmFsdWU6IGBpbmZvIGNvbW1hbmRzIGFyZSB1c2VkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCBhbnl0aGluZy5gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImVjb25vbXlcIixcclxuICAgICAgICAgICAgdmFsdWU6IGBlY29ub215IGNvbW1hbmRzIGFyZSB1c2VkIHRvIGdhaW4gY29pbnMgYW5kIGl0ZW1zLmAsXHJcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidHJpdmlhL2Z1blwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYHRyaXZpYSBjb21tYW5kcyBhcmUgdXNlZCB0byBkbyB0aGluZyB0aGluZ3Mgd2hpY2ggYW11c2VzIHBlb3BsZS5gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImNvbmZpZ1wiLFxyXG4gICAgICAgICAgICB2YWx1ZTogYGNvbmZpZyBjb21tYW5kcyBhcmUgdXNlZCB0byBzZXQgdXAgYm90IHNldHRpbmdzIGZvciB0aGlzIHNlcnZlci5gLFxyXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlxcdTIwMGJcIixcclxuICAgICAgICAgICAgdmFsdWU6XHJcbiAgICAgICAgICAgICAgXCJbc3VwcG9ydCBzZXJ2ZXJdKGh0dHBzOi8vZGlzY29yZC5nZy9wZHF4cHphdnB5KSB8IFthZGQgYm90XShodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD04MDYyNDIzODE4NjYyMDUxOTUmcGVybWlzc2lvbnM9MjE0NzQ4MzY0NyZzY29wZT1ib3QpIHwgW3ZvdGUgaGVyZV0oaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlKVwiLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0VGl0bGUoYE5vIGNvbW1hbmQgZm91bmRgKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihcclxuICAgICAgICAgIGAke3RoaXMuY2xpZW50LmVtb3Rlcy5lcnJvcn0gQ291bGQgbm90IGZpbmQgdGhlIGNvbW1hbmQgXFxgJHtjb21tYW5kfVxcYGBcclxuICAgICAgICApXHJcbiAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19