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
                usage: "help <command>",
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
        if (command) {
            let commandEmbed = new discord_js_1.MessageEmbed()
                .setTitle(`Help ${command}`)
                .setColor(this.client.colors.default)
                .addField("Usage:", `\`${command.description.usage || "No usage provide."}\``);
            if (command.description.examples) {
                commandEmbed.addField("Examples:", `\`${command.description.examples
                    ? command.description.examples.map((e) => `${e}`).join("\n")
                    : "no examples provided."}\``);
            }
            commandEmbed.addField("Aliases:", `\`${command.aliases
                ? command.aliases.map((e) => `${e}`).join(", ")
                : "no examples provided."}\``);
            if (command.description.Permissions) {
                commandEmbed.addField("Permissions:", `${command.description.Permissions}`);
            }
            commandEmbed.addField("\u200b", `[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)`);
            return message.util.send(commandEmbed);
        }
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(message.member.user.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("Help command.")
            .setDescription(`**usage:** \`${message.util.parsed.prefix}${this.description.usage}\``)
            .setColor(this.client.colors.default)
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL());
        for (const category of this.handler.categories.values()) {
            if (["default"].includes(category.id))
                continue;
            embed.addField(category.id, category
                .filter((cmd) => cmd.aliases.length > 0)
                .map((cmd) => `\`${cmd}\``)
                .join(", " || "No commands in category."));
        }
        embed.addField("\u200b", `[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)`);
        return message.channel.send(embed);
    }
}
exports.default = helpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDOUM7UUFDRSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7WUFDckMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7YUFDakM7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsU0FBUztvQkFDYixJQUFJLEVBQUUsY0FBYztpQkFDckI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxPQUFPLEVBQXdCO1FBRWpDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxZQUFZLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUNsQyxRQUFRLENBQUMsUUFBUSxPQUFPLEVBQUUsQ0FBQztpQkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDcEMsUUFBUSxDQUNQLFFBQVEsRUFDUixLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLG1CQUFtQixJQUFJLENBQzFELENBQUM7WUFFSixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxZQUFZLENBQUMsUUFBUSxDQUNuQixXQUFXLEVBQ1gsS0FDRSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVE7b0JBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUM1RCxDQUFDLENBQUMsdUJBQ04sSUFBSSxDQUNMLENBQUM7YUFDSDtZQUVELFlBQVksQ0FBQyxRQUFRLENBQ25CLFVBQVUsRUFDVixLQUNFLE9BQU8sQ0FBQyxPQUFPO2dCQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyx1QkFDTixJQUFJLENBQ0wsQ0FBQztZQUVGLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7Z0JBQ25DLFlBQVksQ0FBQyxRQUFRLENBQ25CLGNBQWMsRUFDZCxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQ3JDLENBQUM7YUFDSDtZQUVELFlBQVksQ0FBQyxRQUFRLENBQ25CLFFBQVEsRUFDUix3T0FBd08sQ0FDek8sQ0FBQztZQUVGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEM7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDN0IsU0FBUyxDQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFFBQVEsQ0FBQyxlQUFlLENBQUM7YUFDekIsY0FBYyxDQUNiLGdCQUFnQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksQ0FDeEU7YUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUFFLFNBQVM7WUFFaEQsS0FBSyxDQUFDLFFBQVEsQ0FDWixRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVE7aUJBQ0wsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3ZDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDMUIsSUFBSSxDQUFDLElBQUksSUFBSSwwQkFBMEIsQ0FBQyxDQUM1QyxDQUFDO1NBQ0g7UUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFDbkIsd09BQXdPLENBQ3pPLENBQUE7UUFFSCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQW5HRCw4QkFtR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBoZWxwQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJoZWxwXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiaGVscFwiLCBcImNvbW1hbmRzXCIsIFwiY21kc1wiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkhlbHBzIHlvdSBvdXQgd2l0aCBhbnkgY29tbWFuZFwiLFxyXG4gICAgICAgIHVzYWdlOiBcImhlbHAgPGNvbW1hbmQ+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImxpbmtzXCIsIFwiaGVscCBwaW5nXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJjb21tYW5kXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImNvbW1hbmRBbGlhc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIHsgY29tbWFuZCB9OiB7IGNvbW1hbmQ6IENvbW1hbmQgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgaWYgKGNvbW1hbmQpIHtcclxuICAgICAgbGV0IGNvbW1hbmRFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRUaXRsZShgSGVscCAke2NvbW1hbmR9YClcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgLmFkZEZpZWxkKFxyXG4gICAgICAgICAgXCJVc2FnZTpcIixcclxuICAgICAgICAgIGBcXGAke2NvbW1hbmQuZGVzY3JpcHRpb24udXNhZ2UgfHwgXCJObyB1c2FnZSBwcm92aWRlLlwifVxcYGBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgaWYgKGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMpIHtcclxuICAgICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgICBcIkV4YW1wbGVzOlwiLFxyXG4gICAgICAgICAgYFxcYCR7XHJcbiAgICAgICAgICAgIGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXNcclxuICAgICAgICAgICAgICA/IGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMubWFwKChlKSA9PiBgJHtlfWApLmpvaW4oXCJcXG5cIilcclxuICAgICAgICAgICAgICA6IFwibm8gZXhhbXBsZXMgcHJvdmlkZWQuXCJcclxuICAgICAgICAgIH1cXGBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgIFwiQWxpYXNlczpcIixcclxuICAgICAgICBgXFxgJHtcclxuICAgICAgICAgIGNvbW1hbmQuYWxpYXNlc1xyXG4gICAgICAgICAgICA/IGNvbW1hbmQuYWxpYXNlcy5tYXAoKGUpID0+IGAke2V9YCkuam9pbihcIiwgXCIpXHJcbiAgICAgICAgICAgIDogXCJubyBleGFtcGxlcyBwcm92aWRlZC5cIlxyXG4gICAgICAgIH1cXGBgXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoY29tbWFuZC5kZXNjcmlwdGlvbi5QZXJtaXNzaW9ucykge1xyXG4gICAgICAgIGNvbW1hbmRFbWJlZC5hZGRGaWVsZChcclxuICAgICAgICAgIFwiUGVybWlzc2lvbnM6XCIsXHJcbiAgICAgICAgICBgJHtjb21tYW5kLmRlc2NyaXB0aW9uLlBlcm1pc3Npb25zfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgXCJcXHUyMDBiXCIsXHJcbiAgICAgICAgYFtzdXBwb3J0IHNlcnZlcl0oaHR0cHM6Ly9kaXNjb3JkLmdnL3BEcVhwWkFWUFkpIHwgW2FkZCBib3RdKGh0dHBzOi8vZGlzY29yZC5jb20vYXBpL29hdXRoMi9hdXRob3JpemU/Y2xpZW50X2lkPTgwNjI0MjM4MTg2NjIwNTE5NSZwZXJtaXNzaW9ucz0yMTQ3NDgzNjQ3JnNjb3BlPWJvdCkgfCBbdm90ZSBoZXJlXShodHRwczovL2Rpc2NvcmRib3RsaXN0LmNvbS9ib3RzL3BsdW5jaGVkLWJvdC91cHZvdGUpYFxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGNvbW1hbmRFbWJlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgLnNldEF1dGhvcihcclxuICAgICAgICBtZXNzYWdlLm1lbWJlci51c2VyLnRhZyxcclxuICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zZXRUaXRsZShcIkhlbHAgY29tbWFuZC5cIilcclxuICAgICAgLnNldERlc2NyaXB0aW9uKFxyXG4gICAgICAgIGAqKnVzYWdlOioqIFxcYCR7bWVzc2FnZS51dGlsLnBhcnNlZC5wcmVmaXh9JHt0aGlzLmRlc2NyaXB0aW9uLnVzYWdlfVxcYGBcclxuICAgICAgKVxyXG4gICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAuc2V0Rm9vdGVyKHRoaXMuY2xpZW50LnVzZXIudGFnLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy52YWx1ZXMoKSkge1xyXG4gICAgICBpZiAoW1wiZGVmYXVsdFwiXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgZW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgIC5maWx0ZXIoKGNtZCkgPT4gY21kLmFsaWFzZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgIC5tYXAoKGNtZCkgPT4gYFxcYCR7Y21kfVxcYGApXHJcbiAgICAgICAgICAuam9pbihcIiwgXCIgfHwgXCJObyBjb21tYW5kcyBpbiBjYXRlZ29yeS5cIilcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbWJlZC5hZGRGaWVsZChcIlxcdTIwMGJcIixcclxuICAgICAgICBgW3N1cHBvcnQgc2VydmVyXShodHRwczovL2Rpc2NvcmQuZ2cvcERxWHBaQVZQWSkgfCBbYWRkIGJvdF0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9ODA2MjQyMzgxODY2MjA1MTk1JnBlcm1pc3Npb25zPTIxNDc0ODM2NDcmc2NvcGU9Ym90KSB8IFt2b3RlIGhlcmVdKGh0dHBzOi8vZGlzY29yZGJvdGxpc3QuY29tL2JvdHMvcGx1bmNoZWQtYm90L3Vwdm90ZSlgXHJcbiAgICAgIClcclxuXHJcbiAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoZW1iZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=