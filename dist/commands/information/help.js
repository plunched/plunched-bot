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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTBDO0FBQzFDLG1EQUFtRDtBQUNuRCwyQ0FBbUQ7QUFHbkQsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxLQUFLLEVBQUUsMkJBQTJCO2dCQUNsQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQ2pDO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsSUFBSSxFQUFFLHlCQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FDZixPQUFnQixFQUNoQixFQUFFLE9BQU8sRUFBd0I7UUFFakMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJO2dCQUNGLElBQUksWUFBWSxHQUFHLElBQUkseUJBQVksRUFBRTtxQkFDbEMsUUFBUSxDQUFDLFFBQVEsT0FBTyxFQUFFLENBQUM7cUJBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7cUJBQ3BDLFFBQVEsQ0FDUCxRQUFRLEVBQ1IsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxtQkFBbUIsSUFBSSxDQUMxRCxDQUFDO2dCQUVKLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVB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QzthQUNwQyxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUV4RSxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFBRSxTQUFTO1lBRWhELEtBQUssQ0FBQyxRQUFRLENBQ1osUUFBUSxDQUFDLEVBQUUsRUFDWCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQzVELElBQUksQ0FDTCxDQUFDO1NBQ0g7UUFFRCxLQUFLLENBQUMsUUFBUSxDQUNaLFFBQVEsRUFDUix3T0FBd08sQ0FDek8sQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBekhELDhCQXlIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFyZ3VtZW50IH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IENvbW1hbmQsIENhdGVnb3J5IH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHN0cmljdCB9IGZyb20gXCJub2RlOmFzc2VydFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGVscENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiaGVscFwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcImhlbHBcIiwgXCJjb21tYW5kc1wiLCBcImNtZHNcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJIZWxwcyB5b3Ugb3V0IHdpdGggYW55IGNvbW1hbmRcIixcclxuICAgICAgICB1c2FnZTogXCJoZWxwIDxjb21tYW5kIHwgY2F0ZWdvcnk+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImxpbmtzXCIsIFwiaGVscCBwaW5nXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJjb21tYW5kXCIsXHJcbiAgICAgICAgICB0eXBlOiBBcmd1bWVudC51bmlvbihcImNvbW1hbmRcIiwgXCJzdHJpbmdcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBjb21tYW5kIH06IHsgY29tbWFuZDogQ29tbWFuZCB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBpZiAoY29tbWFuZCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBjb21tYW5kRW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgIC5zZXRUaXRsZShgSGVscCAke2NvbW1hbmR9YClcclxuICAgICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAgIC5hZGRGaWVsZChcclxuICAgICAgICAgICAgXCJVc2FnZTpcIixcclxuICAgICAgICAgICAgYFxcYCR7Y29tbWFuZC5kZXNjcmlwdGlvbi51c2FnZSB8fCBcIk5vIHVzYWdlIHByb3ZpZGUuXCJ9XFxgYFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMpIHtcclxuICAgICAgICAgIGNvbW1hbmRFbWJlZC5hZGRGaWVsZChcclxuICAgICAgICAgICAgXCJFeGFtcGxlczpcIixcclxuICAgICAgICAgICAgYFxcYCR7XHJcbiAgICAgICAgICAgICAgY29tbWFuZC5kZXNjcmlwdGlvbi5leGFtcGxlc1xyXG4gICAgICAgICAgICAgICAgPyBjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzLm1hcCgoZSkgPT4gYCR7ZX1gKS5qb2luKFwiXFxuXCIpXHJcbiAgICAgICAgICAgICAgICA6IFwibm8gZXhhbXBsZXMgcHJvdmlkZWQuXCJcclxuICAgICAgICAgICAgfVxcYGBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgICBcIkFsaWFzZXM6XCIsXHJcbiAgICAgICAgICBgXFxgJHtcclxuICAgICAgICAgICAgY29tbWFuZC5hbGlhc2VzXHJcbiAgICAgICAgICAgICAgPyBjb21tYW5kLmFsaWFzZXMubWFwKChlKSA9PiBgJHtlfWApLmpvaW4oXCIsIFwiKVxyXG4gICAgICAgICAgICAgIDogXCJubyBleGFtcGxlcyBwcm92aWRlZC5cIlxyXG4gICAgICAgICAgfVxcYGBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoY29tbWFuZC5kZXNjcmlwdGlvbi5QZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgICAgICBcIlBlcm1pc3Npb25zOlwiLFxyXG4gICAgICAgICAgICBgJHtjb21tYW5kLmRlc2NyaXB0aW9uLlBlcm1pc3Npb25zfWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgICBcIlxcdTIwMGJcIixcclxuICAgICAgICAgIGBbc3VwcG9ydCBzZXJ2ZXJdKGh0dHBzOi8vZGlzY29yZC5nZy9wRHFYcFpBVlBZKSB8IFthZGQgYm90XShodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD04MDYyNDIzODE4NjYyMDUxOTUmcGVybWlzc2lvbnM9MjE0NzQ4MzY0NyZzY29wZT1ib3QpIHwgW3ZvdGUgaGVyZV0oaHR0cHM6Ly9kaXNjb3JkYm90bGlzdC5jb20vYm90cy9wbHVuY2hlZC1ib3QvdXB2b3RlKWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoY29tbWFuZEVtYmVkKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLmNhdGVnb3JpZXMua2V5QXJyYXkoKS5mb3JFYWNoKChjKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYyA9PSBjb21tYW5kLnRvU3RyaW5nKCkpIHJldHVybiAoY2F0ZWdvcnkgPSBjKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbW1hbmRzID0gdGhpcy5oYW5kbGVyXHJcbiAgICAgICAgICAuZmluZENhdGVnb3J5KGNhdGVnb3J5KVxyXG4gICAgICAgICAgLmtleUFycmF5KClcclxuICAgICAgICAgIC5tYXAoKGMpID0+IGBcXGAke2N9XFxgYClcclxuICAgICAgICAgIC5qb2luKGAsIGApO1xyXG5cclxuICAgICAgICBpZiAoY2F0ZWdvcnkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgLnNldFRpdGxlKGBoZWxwICR7Y2F0ZWdvcnl9YClcclxuICAgICAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYCoqQ29tbWFuZHM6KipcXG4gJHtjb21tYW5kc31gKTtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChlbWJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcImNvdWxkIG5vdCBmaW5kIHRoYXQgY2F0ZWdvcnlcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAuc2V0QXV0aG9yKFxyXG4gICAgICAgIG1lc3NhZ2UubWVtYmVyLnVzZXIudGFnLFxyXG4gICAgICAgIG1lc3NhZ2UuYXV0aG9yLmRpc3BsYXlBdmF0YXJVUkwoeyBkeW5hbWljOiB0cnVlIH0pXHJcbiAgICAgIClcclxuICAgICAgLnNldFRpdGxlKFwiSGVscCBjb21tYW5kLlwiKVxyXG4gICAgICAuc2V0RGVzY3JpcHRpb24oXHJcbiAgICAgICAgYCoqdXNhZ2U6KiogXFxgJHttZXNzYWdlLnV0aWwucGFyc2VkLnByZWZpeH0ke3RoaXMuZGVzY3JpcHRpb24udXNhZ2V9XFxgYFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgLnNldFRpbWVzdGFtcCgpXHJcbiAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIHRoaXMuaGFuZGxlci5jYXRlZ29yaWVzLnZhbHVlcygpKSB7XHJcbiAgICAgIGlmIChbXCJkZWZhdWx0XCJdLmluY2x1ZGVzKGNhdGVnb3J5LmlkKSkgY29udGludWU7XHJcblxyXG4gICAgICBlbWJlZC5hZGRGaWVsZChcclxuICAgICAgICBjYXRlZ29yeS5pZCxcclxuICAgICAgICBgXFxuKioke21lc3NhZ2UudXRpbC5wYXJzZWQucHJlZml4fWhlbHAgXFxgJHtjYXRlZ29yeS5pZH1cXGAqKmAsXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICBcIlxcdTIwMGJcIixcclxuICAgICAgYFtzdXBwb3J0IHNlcnZlcl0oaHR0cHM6Ly9kaXNjb3JkLmdnL3BEcVhwWkFWUFkpIHwgW2FkZCBib3RdKGh0dHBzOi8vZGlzY29yZC5jb20vYXBpL29hdXRoMi9hdXRob3JpemU/Y2xpZW50X2lkPTgwNjI0MjM4MTg2NjIwNTE5NSZwZXJtaXNzaW9ucz0yMTQ3NDgzNjQ3JnNjb3BlPWJvdCkgfCBbdm90ZSBoZXJlXShodHRwczovL2Rpc2NvcmRib3RsaXN0LmNvbS9ib3RzL3BsdW5jaGVkLWJvdC91cHZvdGUpYFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoZW1iZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=