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
                try {
                    let category = "";
                    this.handler.categories.keyArray().forEach((c) => {
                        if (c == command.toString().toLowerCase())
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
                }
                catch (err) {
                    return message.util.send("could not find that category");
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTBDO0FBQzFDLG1EQUFtRDtBQUNuRCwyQ0FBbUQ7QUFHbkQsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxLQUFLLEVBQUUsMkJBQTJCO2dCQUNsQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQ2pDO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsSUFBSSxFQUFFLHlCQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FDZixPQUFnQixFQUNoQixFQUFFLE9BQU8sRUFBd0I7UUFFakMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJO2dCQUNGLElBQUksWUFBWSxHQUFHLElBQUkseUJBQVksRUFBRTtxQkFDbEMsUUFBUSxDQUFDLFFBQVEsT0FBTyxFQUFFLENBQUM7cUJBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7cUJBQ3BDLFlBQVksRUFBRTtxQkFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJB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aXJvXCI7XHJcbmltcG9ydCB7IENvbW1hbmQsIENhdGVnb3J5IH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHN0cmljdCB9IGZyb20gXCJub2RlOmFzc2VydFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGVscENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiaGVscFwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcImhlbHBcIiwgXCJjb21tYW5kc1wiLCBcImNtZHNcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJIZWxwcyB5b3Ugb3V0IHdpdGggYW55IGNvbW1hbmRcIixcclxuICAgICAgICB1c2FnZTogXCJoZWxwIDxjb21tYW5kIHwgY2F0ZWdvcnk+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImxpbmtzXCIsIFwiaGVscCBwaW5nXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJjb21tYW5kXCIsXHJcbiAgICAgICAgICB0eXBlOiBBcmd1bWVudC51bmlvbihcImNvbW1hbmRcIiwgXCJzdHJpbmdcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBjb21tYW5kIH06IHsgY29tbWFuZDogQ29tbWFuZCB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBpZiAoY29tbWFuZCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBjb21tYW5kRW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgIC5zZXRUaXRsZShgSGVscCAke2NvbW1hbmR9YClcclxuICAgICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgLnNldEZvb3Rlcih0aGlzLmNsaWVudC51c2VyLnRhZywgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICAgICAgICAuYWRkRmllbGQoXHJcbiAgICAgICAgICAgIFwiVXNhZ2U6XCIsXHJcbiAgICAgICAgICAgIGBcXGAke2NvbW1hbmQuZGVzY3JpcHRpb24udXNhZ2UgfHwgXCJObyB1c2FnZSBwcm92aWRlLlwifVxcYGBcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzKSB7XHJcbiAgICAgICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgICAgIFwiRXhhbXBsZXM6XCIsXHJcbiAgICAgICAgICAgIGBcXGAke1xyXG4gICAgICAgICAgICAgIGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXNcclxuICAgICAgICAgICAgICAgID8gY29tbWFuZC5kZXNjcmlwdGlvbi5leGFtcGxlcy5tYXAoKGUpID0+IGAke2V9YCkuam9pbihcIlxcblwiKVxyXG4gICAgICAgICAgICAgICAgOiBcIm5vIGV4YW1wbGVzIHByb3ZpZGVkLlwiXHJcbiAgICAgICAgICAgIH1cXGBgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgICAgXCJBbGlhc2VzOlwiLFxyXG4gICAgICAgICAgYFxcYCR7XHJcbiAgICAgICAgICAgIGNvbW1hbmQuYWxpYXNlc1xyXG4gICAgICAgICAgICAgID8gY29tbWFuZC5hbGlhc2VzLm1hcCgoZSkgPT4gYCR7ZX1gKS5qb2luKFwiLCBcIilcclxuICAgICAgICAgICAgICA6IFwibm8gZXhhbXBsZXMgcHJvdmlkZWQuXCJcclxuICAgICAgICAgIH1cXGBgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmQuZGVzY3JpcHRpb24uUGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgIGNvbW1hbmRFbWJlZC5hZGRGaWVsZChcclxuICAgICAgICAgICAgXCJQZXJtaXNzaW9uczpcIixcclxuICAgICAgICAgICAgYCR7Y29tbWFuZC5kZXNjcmlwdGlvbi5QZXJtaXNzaW9uc31gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgICAgXCJcXHUyMDBiXCIsXHJcbiAgICAgICAgICBgW3N1cHBvcnQgc2VydmVyXShodHRwczovL2Rpc2NvcmQuZ2cvcERxWHBaQVZQWSkgfCBbYWRkIGJvdF0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9ODA2MjQyMzgxODY2MjA1MTk1JnBlcm1pc3Npb25zPTIxNDc0ODM2NDcmc2NvcGU9Ym90KSB8IFt2b3RlIGhlcmVdKGh0dHBzOi8vZGlzY29yZGJvdGxpc3QuY29tL2JvdHMvcGx1bmNoZWQtYm90L3Vwdm90ZSlgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGNvbW1hbmRFbWJlZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBcIlwiO1xyXG5cclxuICAgICAgICAgIHRoaXMuaGFuZGxlci5jYXRlZ29yaWVzLmtleUFycmF5KCkuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYyA9PSBjb21tYW5kLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgcmV0dXJuIChjYXRlZ29yeSA9IGMpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbGV0IGNvbW1hbmRzID0gdGhpcy5oYW5kbGVyXHJcbiAgICAgICAgICAgIC5maW5kQ2F0ZWdvcnkoY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIC5rZXlBcnJheSgpXHJcbiAgICAgICAgICAgIC5tYXAoKGMpID0+IGBcXGAke2N9XFxgYClcclxuICAgICAgICAgICAgLmpvaW4oYCwgYCk7XHJcblxyXG4gICAgICAgICAgaWYgKGNhdGVnb3J5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAuc2V0VGl0bGUoYGhlbHAgJHtjYXRlZ29yeX1gKVxyXG4gICAgICAgICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuICAgICAgICAgICAgICAuc2V0Rm9vdGVyKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQudXNlci50YWcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYCoqQ29tbWFuZHM6KipcXG4gJHtjb21tYW5kc31gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGVtYmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcImNvdWxkIG5vdCBmaW5kIHRoYXQgY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgLnNldEF1dGhvcihcclxuICAgICAgICBtZXNzYWdlLm1lbWJlci51c2VyLnRhZyxcclxuICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zZXRUaXRsZShcIkhlbHAgY29tbWFuZC5cIilcclxuICAgICAgLnNldERlc2NyaXB0aW9uKFxyXG4gICAgICAgIGAqKnVzYWdlOioqIFxcYCR7bWVzc2FnZS51dGlsLnBhcnNlZC5wcmVmaXh9JHt0aGlzLmRlc2NyaXB0aW9uLnVzYWdlfVxcYGBcclxuICAgICAgKVxyXG4gICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAuc2V0Rm9vdGVyKHRoaXMuY2xpZW50LnVzZXIudGFnLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy52YWx1ZXMoKSkge1xyXG4gICAgICBpZiAoW1wiZGVmYXVsdFwiXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgZW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgYFxcbioqJHttZXNzYWdlLnV0aWwucGFyc2VkLnByZWZpeH1oZWxwIFxcYCR7Y2F0ZWdvcnkuaWR9XFxgKipgLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbWJlZC5hZGRGaWVsZChcclxuICAgICAgXCJcXHUyMDBiXCIsXHJcbiAgICAgIGBbc3VwcG9ydCBzZXJ2ZXJdKGh0dHBzOi8vZGlzY29yZC5nZy9wRHFYcFpBVlBZKSB8IFthZGQgYm90XShodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD04MDYyNDIzODE4NjYyMDUxOTUmcGVybWlzc2lvbnM9MjE0NzQ4MzY0NyZzY29wZT1ib3QpIHwgW3ZvdGUgaGVyZV0oaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlKWBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGVtYmVkKTtcclxuICB9XHJcbn1cclxuIl19