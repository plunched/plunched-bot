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
                usage: "help <command>",
                examples: ["links", "help ping"],
            },
            ratelimit: 3,
            args: [
                {
                    id: "command",
                    type: discord_akairo_1.Argument.union("command", "lowercase"),
                },
            ],
        });
    }
    exec(message, { command }) {
        if (command) {
            if (this.handler.categories.values())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQTBDO0FBQzFDLG1EQUFtRDtBQUNuRCwyQ0FBbUQ7QUFHbkQsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQ2pDO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsSUFBSSxFQUFFLHlCQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7aUJBQzdDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUNULE9BQWdCLEVBQ2hCLEVBQUUsT0FBTyxFQUF3QjtRQUVqQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxJQUFJO29CQUNGLElBQUksWUFBWSxHQUFHLElBQUkseUJBQVksRUFBRTt5QkFDbEMsUUFBUSxDQUFDLFFBQVEsT0FBTyxFQUFFLENBQUM7eUJBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7eUJBQ3BDLFFBQVEsQ0FDUCxRQUFRLEVBQ1IsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxtQkFBbUIsSUFBSSxDQUMxRCxD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Q3JDLENBQUM7Q0FDRjtBQXpHRCw4QkF5R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmd1bWVudCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBDb21tYW5kLCBDYXRlZ29yeSB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBzdHJpY3QgfSBmcm9tIFwibm9kZTphc3NlcnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlbHBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImhlbHBcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJoZWxwXCIsIFwiY29tbWFuZHNcIiwgXCJjbWRzXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscHMgeW91IG91dCB3aXRoIGFueSBjb21tYW5kXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiaGVscCA8Y29tbWFuZD5cIixcclxuICAgICAgICBleGFtcGxlczogW1wibGlua3NcIiwgXCJoZWxwIHBpbmdcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcImNvbW1hbmRcIixcclxuICAgICAgICAgIHR5cGU6IEFyZ3VtZW50LnVuaW9uKFwiY29tbWFuZFwiLCBcImxvd2VyY2FzZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IGNvbW1hbmQgfTogeyBjb21tYW5kOiBDb21tYW5kIH1cclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIGlmIChjb21tYW5kKSB7XHJcbiAgICAgIGlmICh0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy52YWx1ZXMoKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbGV0IGNvbW1hbmRFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0VGl0bGUoYEhlbHAgJHtjb21tYW5kfWApXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAgICAgLmFkZEZpZWxkKFxyXG4gICAgICAgICAgICAgIFwiVXNhZ2U6XCIsXHJcbiAgICAgICAgICAgICAgYFxcYCR7Y29tbWFuZC5kZXNjcmlwdGlvbi51c2FnZSB8fCBcIk5vIHVzYWdlIHByb3ZpZGUuXCJ9XFxgYFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbW1hbmRFbWJlZC5hZGRGaWVsZChcclxuICAgICAgICAgICAgICBcIkV4YW1wbGVzOlwiLFxyXG4gICAgICAgICAgICAgIGBcXGAke1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZC5kZXNjcmlwdGlvbi5leGFtcGxlc1xyXG4gICAgICAgICAgICAgICAgICA/IGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMubWFwKChlKSA9PiBgJHtlfWApLmpvaW4oXCJcXG5cIilcclxuICAgICAgICAgICAgICAgICAgOiBcIm5vIGV4YW1wbGVzIHByb3ZpZGVkLlwiXHJcbiAgICAgICAgICAgICAgfVxcYGBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgICAgIFwiQWxpYXNlczpcIixcclxuICAgICAgICAgICAgYFxcYCR7XHJcbiAgICAgICAgICAgICAgY29tbWFuZC5hbGlhc2VzXHJcbiAgICAgICAgICAgICAgICA/IGNvbW1hbmQuYWxpYXNlcy5tYXAoKGUpID0+IGAke2V9YCkuam9pbihcIiwgXCIpXHJcbiAgICAgICAgICAgICAgICA6IFwibm8gZXhhbXBsZXMgcHJvdmlkZWQuXCJcclxuICAgICAgICAgICAgfVxcYGBcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbW1hbmQuZGVzY3JpcHRpb24uUGVybWlzc2lvbnMpIHtcclxuICAgICAgICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgICAgICAgIFwiUGVybWlzc2lvbnM6XCIsXHJcbiAgICAgICAgICAgICAgYCR7Y29tbWFuZC5kZXNjcmlwdGlvbi5QZXJtaXNzaW9uc31gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgICAgICBcIlxcdTIwMGJcIixcclxuICAgICAgICAgICAgYFtzdXBwb3J0IHNlcnZlcl0oaHR0cHM6Ly9kaXNjb3JkLmdnL3BEcVhwWkFWUFkpIHwgW2FkZCBib3RdKGh0dHBzOi8vZGlzY29yZC5jb20vYXBpL29hdXRoMi9hdXRob3JpemU/Y2xpZW50X2lkPTgwNjI0MjM4MTg2NjIwNTE5NSZwZXJtaXNzaW9ucz0yMTQ3NDgzNjQ3JnNjb3BlPWJvdCkgfCBbdm90ZSBoZXJlXShodHRwczovL2Rpc2NvcmRib3RsaXN0LmNvbS9ib3RzL3BsdW5jaGVkLWJvdC91cHZvdGUpYFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoY29tbWFuZEVtYmVkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcImNvdWxkIG5vdCBmaW5kIHRoYXQgY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgIC5zZXRBdXRob3IoXHJcbiAgICAgICAgbWVzc2FnZS5tZW1iZXIudXNlci50YWcsXHJcbiAgICAgICAgbWVzc2FnZS5hdXRob3IuZGlzcGxheUF2YXRhclVSTCh7IGR5bmFtaWM6IHRydWUgfSlcclxuICAgICAgKVxyXG4gICAgICAuc2V0VGl0bGUoXCJIZWxwIGNvbW1hbmQuXCIpXHJcbiAgICAgIC5zZXREZXNjcmlwdGlvbihcclxuICAgICAgICBgKip1c2FnZToqKiBcXGAke21lc3NhZ2UudXRpbC5wYXJzZWQucHJlZml4fSR7dGhpcy5kZXNjcmlwdGlvbi51c2FnZX1cXGBgXHJcbiAgICAgIClcclxuICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICAuc2V0VGltZXN0YW1wKClcclxuICAgICAgLnNldEZvb3Rlcih0aGlzLmNsaWVudC51c2VyLnRhZywgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpO1xyXG5cclxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgdGhpcy5oYW5kbGVyLmNhdGVnb3JpZXMudmFsdWVzKCkpIHtcclxuICAgICAgaWYgKFtcImRlZmF1bHRcIl0uaW5jbHVkZXMoY2F0ZWdvcnkuaWQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgIGNhdGVnb3J5LmlkLFxyXG4gICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAuZmlsdGVyKChjbWQpID0+IGNtZC5hbGlhc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAubWFwKChjbWQpID0+IGBcXGAke2NtZH1cXGBgKVxyXG4gICAgICAgICAgLmpvaW4oXCIsIFwiIHx8IFwiTm8gY29tbWFuZHMgaW4gY2F0ZWdvcnkuXCIpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1iZWQuYWRkRmllbGQoXHJcbiAgICAgIFwiXFx1MjAwYlwiLFxyXG4gICAgICBgW3N1cHBvcnQgc2VydmVyXShodHRwczovL2Rpc2NvcmQuZ2cvcERxWHBaQVZQWSkgfCBbYWRkIGJvdF0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9ODA2MjQyMzgxODY2MjA1MTk1JnBlcm1pc3Npb25zPTIxNDc0ODM2NDcmc2NvcGU9Ym90KSB8IFt2b3RlIGhlcmVdKGh0dHBzOi8vZGlzY29yZGJvdGxpc3QuY29tL2JvdHMvcGx1bmNoZWQtYm90L3Vwdm90ZSlgXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChlbWJlZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==