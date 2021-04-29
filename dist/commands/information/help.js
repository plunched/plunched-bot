"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_akairo_2 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class helpCommand extends discord_akairo_2.Command {
    constructor() {
        super("help", {
            aliases: ["help", "commands", "cmds"],
            category: "information",
            description: {
                content: "Helps you out with any command",
                usage: "help <command | category>",
                examples: ["links", "help ping"],
            },
            ratelimit: 3,
            args: [
                {
                    id: "command",
                    type: discord_akairo_1.Argument.union("command", "string"),
                },
            ],
        });
    }
    async exec(message, { command }) {
        if (command) {
            try {
                let commandEmbed = new discord_js_1.MessageEmbed()
                    .setTitle(`Help ${command}`)
                    .setColor(this.client.colors.default)
                    .setTimestamp()
                    .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
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
            catch (err) {
                let category = "";
                this.handler.categories.keyArray().forEach((c) => {
                    if (c == command.toString())
                        return (category = c);
                });
                let commands = this.handler
                    .findCategory(category)
                    .keyArray()
                    .map((c) => `\`${c}\``)
                    .join(`, `);
                if (category.length > 1) {
                    const embed = new discord_js_1.MessageEmbed()
                        .setTitle(`help ${category}`)
                        .setColor(this.client.colors.default)
                        .setTimestamp()
                        .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
                        .setDescription(`**Commands:**\n ${commands}`);
                    return message.util.send(embed);
                }
                return message.util.send("could not find that category");
            }
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
            embed.addField(category.id, `\n**${message.util.parsed.prefix}help \`${category.id}\`**`, true);
        }
        embed.addField("\u200b", `[support server](https://discord.gg/pDqXpZAVPY) | [add bot](https://discord.com/api/oauth2/authorize?client_id=806242381866205195&permissions=2147483647&scope=bot) | [vote here](https://discordbotlist.com/bots/plunched-bot/upvote)`);
        return message.channel.send(embed);
    }
}
exports.default = helpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTBDO0FBQzFDLG1EQUFtRDtBQUNuRCwyQ0FBbUQ7QUFHbkQsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxLQUFLLEVBQUUsMkJBQTJCO2dCQUNsQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQ2pDO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsSUFBSSxFQUFFLHlCQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FDZixPQUFnQixFQUNoQixFQUFFLE9BQU8sRUFBd0I7UUFFakMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJO2dCQUNGLElBQUksWUFBWSxHQUFHLElBQUkseUJBQVksRUFBRTtxQkFDbEMsUUFBUSxDQUFDLFFBQVEsT0FBTyxFQUFFLENBQUM7cUJBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7cUJBQ3BDLFlBQVksRUFBRTtxQkFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJB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LENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ25EO2FBQ0EsUUFBUSxDQUFDLGVBQWUsQ0FBQzthQUN6QixjQUFjLENBQ2IsZ0JBQWdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxDQUN4RTthQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDcEMsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFeEUsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQUUsU0FBUztZQUVoRCxLQUFLLENBQUMsUUFBUSxDQUNaLFFBQVEsQ0FBQyxFQUFFLEVBQ1gsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFVBQVUsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUM1RCxJQUFJLENBQ0wsQ0FBQztTQUNIO1FBRUQsS0FBSyxDQUFDLFFBQVEsQ0FDWixRQUFRLEVBQ1Isd09BQXdPLENBQ3pPLENBQUM7UUFFRixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQWhJRCw4QkFnSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmd1bWVudCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBDb21tYW5kLCBDYXRlZ29yeSB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBzdHJpY3QgfSBmcm9tIFwibm9kZTphc3NlcnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlbHBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImhlbHBcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJoZWxwXCIsIFwiY29tbWFuZHNcIiwgXCJjbWRzXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscHMgeW91IG91dCB3aXRoIGFueSBjb21tYW5kXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiaGVscCA8Y29tbWFuZCB8IGNhdGVnb3J5PlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJsaW5rc1wiLCBcImhlbHAgcGluZ1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiY29tbWFuZFwiLFxyXG4gICAgICAgICAgdHlwZTogQXJndW1lbnQudW5pb24oXCJjb21tYW5kXCIsIFwic3RyaW5nXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIHsgY29tbWFuZCB9OiB7IGNvbW1hbmQ6IENvbW1hbmQgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgaWYgKGNvbW1hbmQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgY29tbWFuZEVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAuc2V0VGl0bGUoYEhlbHAgJHtjb21tYW5kfWApXHJcbiAgICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuICAgICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgICAgICAgLmFkZEZpZWxkKFxyXG4gICAgICAgICAgICBcIlVzYWdlOlwiLFxyXG4gICAgICAgICAgICBgXFxgJHtjb21tYW5kLmRlc2NyaXB0aW9uLnVzYWdlIHx8IFwiTm8gdXNhZ2UgcHJvdmlkZS5cIn1cXGBgXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoY29tbWFuZC5kZXNjcmlwdGlvbi5leGFtcGxlcykge1xyXG4gICAgICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgICAgICBcIkV4YW1wbGVzOlwiLFxyXG4gICAgICAgICAgICBgXFxgJHtcclxuICAgICAgICAgICAgICBjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzXHJcbiAgICAgICAgICAgICAgICA/IGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMubWFwKChlKSA9PiBgJHtlfWApLmpvaW4oXCJcXG5cIilcclxuICAgICAgICAgICAgICAgIDogXCJubyBleGFtcGxlcyBwcm92aWRlZC5cIlxyXG4gICAgICAgICAgICB9XFxgYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1hbmRFbWJlZC5hZGRGaWVsZChcclxuICAgICAgICAgIFwiQWxpYXNlczpcIixcclxuICAgICAgICAgIGBcXGAke1xyXG4gICAgICAgICAgICBjb21tYW5kLmFsaWFzZXNcclxuICAgICAgICAgICAgICA/IGNvbW1hbmQuYWxpYXNlcy5tYXAoKGUpID0+IGAke2V9YCkuam9pbihcIiwgXCIpXHJcbiAgICAgICAgICAgICAgOiBcIm5vIGV4YW1wbGVzIHByb3ZpZGVkLlwiXHJcbiAgICAgICAgICB9XFxgYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChjb21tYW5kLmRlc2NyaXB0aW9uLlBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgICAgIFwiUGVybWlzc2lvbnM6XCIsXHJcbiAgICAgICAgICAgIGAke2NvbW1hbmQuZGVzY3JpcHRpb24uUGVybWlzc2lvbnN9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1hbmRFbWJlZC5hZGRGaWVsZChcclxuICAgICAgICAgIFwiXFx1MjAwYlwiLFxyXG4gICAgICAgICAgYFtzdXBwb3J0IHNlcnZlcl0oaHR0cHM6Ly9kaXNjb3JkLmdnL3BEcVhwWkFWUFkpIHwgW2FkZCBib3RdKGh0dHBzOi8vZGlzY29yZC5jb20vYXBpL29hdXRoMi9hdXRob3JpemU/Y2xpZW50X2lkPTgwNjI0MjM4MTg2NjIwNTE5NSZwZXJtaXNzaW9ucz0yMTQ3NDgzNjQ3JnNjb3BlPWJvdCkgfCBbdm90ZSBoZXJlXShodHRwczovL2Rpc2NvcmRib3RsaXN0LmNvbS9ib3RzL3BsdW5jaGVkLWJvdC91cHZvdGUpYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChjb21tYW5kRW1iZWQpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy5rZXlBcnJheSgpLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgIGlmIChjID09IGNvbW1hbmQudG9TdHJpbmcoKSkgcmV0dXJuIChjYXRlZ29yeSA9IGMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29tbWFuZHMgPSB0aGlzLmhhbmRsZXJcclxuICAgICAgICAgIC5maW5kQ2F0ZWdvcnkoY2F0ZWdvcnkpXHJcbiAgICAgICAgICAua2V5QXJyYXkoKVxyXG4gICAgICAgICAgLm1hcCgoYykgPT4gYFxcYCR7Y31cXGBgKVxyXG4gICAgICAgICAgLmpvaW4oYCwgYCk7XHJcblxyXG4gICAgICAgIGlmIChjYXRlZ29yeS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0VGl0bGUoYGhlbHAgJHtjYXRlZ29yeX1gKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICAuc2V0Rm9vdGVyKFxyXG4gICAgICAgICAgICAgIHRoaXMuY2xpZW50LnVzZXIudGFnLFxyXG4gICAgICAgICAgICAgIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAqKkNvbW1hbmRzOioqXFxuICR7Y29tbWFuZHN9YCk7XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoZW1iZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXCJjb3VsZCBub3QgZmluZCB0aGF0IGNhdGVnb3J5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgLnNldEF1dGhvcihcclxuICAgICAgICBtZXNzYWdlLm1lbWJlci51c2VyLnRhZyxcclxuICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zZXRUaXRsZShcIkhlbHAgY29tbWFuZC5cIilcclxuICAgICAgLnNldERlc2NyaXB0aW9uKFxyXG4gICAgICAgIGAqKnVzYWdlOioqIFxcYCR7bWVzc2FnZS51dGlsLnBhcnNlZC5wcmVmaXh9JHt0aGlzLmRlc2NyaXB0aW9uLnVzYWdlfVxcYGBcclxuICAgICAgKVxyXG4gICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAuc2V0Rm9vdGVyKHRoaXMuY2xpZW50LnVzZXIudGFnLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy52YWx1ZXMoKSkge1xyXG4gICAgICBpZiAoW1wiZGVmYXVsdFwiXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgZW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgYFxcbioqJHttZXNzYWdlLnV0aWwucGFyc2VkLnByZWZpeH1oZWxwIFxcYCR7Y2F0ZWdvcnkuaWR9XFxgKipgLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbWJlZC5hZGRGaWVsZChcclxuICAgICAgXCJcXHUyMDBiXCIsXHJcbiAgICAgIGBbc3VwcG9ydCBzZXJ2ZXJdKGh0dHBzOi8vZGlzY29yZC5nZy9wRHFYcFpBVlBZKSB8IFthZGQgYm90XShodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD04MDYyNDIzODE4NjYyMDUxOTUmcGVybWlzc2lvbnM9MjE0NzQ4MzY0NyZzY29wZT1ib3QpIHwgW3ZvdGUgaGVyZV0oaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlKWBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGVtYmVkKTtcclxuICB9XHJcbn1cclxuIl19