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
            if (!command.description.content)
                return message.util.send(new discord_js_1.MessageEmbed().setTitle("no command found"));
            return message.util.send(new discord_js_1.MessageEmbed()
                .setTitle(`Help ${command}`)
                .setDescription(`\n${command.description.content || "No description provided."}

      **usage:**\n\`${command.description.usage || "No usage provide."}\`

      **examples:**\n\`${command.description.examples
                ? command.description.examples.map((e) => `${e}`).join("\n")
                : "No examples provided."}\``)
                .setColor(this.client.colors.default));
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
        return message.channel.send(embed);
    }
}
exports.default = helpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDOUM7UUFDRSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7WUFDckMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7YUFDakM7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsU0FBUztvQkFDYixJQUFJLEVBQUUsY0FBYztpQkFDckI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxPQUFPLEVBQXdCO1FBRWpDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTztnQkFDOUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEIsSUFBSSx5QkFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQ2hELENBQUM7WUFDSixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7aUJBQ2YsUUFBUSxDQUFDLFFBQVEsT0FBTyxFQUFFLENBQUM7aUJBQzNCLGNBQWMsQ0FDYixLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLDBCQUEwQjs7c0JBRXBELE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLG1CQUFtQjs7eUJBRzlELE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUTtnQkFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVELENBQUMsQ0FBQyx1QkFDTixJQUFJLENBQ0M7aUJBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUN4QyxDQUFDO1NBQ0g7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDN0IsU0FBUyxDQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUNuRDthQUNBLFFBQVEsQ0FBQyxlQUFlLENBQUM7YUFDekIsY0FBYyxDQUNiLGdCQUFnQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksQ0FDeEU7YUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUFFLFNBQVM7WUFFaEQsS0FBSyxDQUFDLFFBQVEsQ0FDWixRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVE7aUJBQ0wsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ3ZDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDMUIsSUFBSSxDQUFDLElBQUksSUFBSSwwQkFBMEIsQ0FBQyxDQUM1QyxDQUFDO1NBQ0g7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQTFFRCw4QkEwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBoZWxwQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJoZWxwXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiaGVscFwiLCBcImNvbW1hbmRzXCIsIFwiY21kc1wiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkhlbHBzIHlvdSBvdXQgd2l0aCBhbnkgY29tbWFuZFwiLFxyXG4gICAgICAgIHVzYWdlOiBcImhlbHAgPGNvbW1hbmQ+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImxpbmtzXCIsIFwiaGVscCBwaW5nXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJjb21tYW5kXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImNvbW1hbmRBbGlhc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIHsgY29tbWFuZCB9OiB7IGNvbW1hbmQ6IENvbW1hbmQgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgaWYgKGNvbW1hbmQpIHtcclxuICAgICAgaWYgKCFjb21tYW5kLmRlc2NyaXB0aW9uLmNvbnRlbnQpXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpLnNldFRpdGxlKFwibm8gY29tbWFuZCBmb3VuZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgIC5zZXRUaXRsZShgSGVscCAke2NvbW1hbmR9YClcclxuICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcclxuICAgICAgICAgICAgYFxcbiR7Y29tbWFuZC5kZXNjcmlwdGlvbi5jb250ZW50IHx8IFwiTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQuXCJ9XHJcblxyXG4gICAgICAqKnVzYWdlOioqXFxuXFxgJHtjb21tYW5kLmRlc2NyaXB0aW9uLnVzYWdlIHx8IFwiTm8gdXNhZ2UgcHJvdmlkZS5cIn1cXGBcclxuXHJcbiAgICAgICoqZXhhbXBsZXM6KipcXG5cXGAke1xyXG4gICAgICAgIGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXNcclxuICAgICAgICAgID8gY29tbWFuZC5kZXNjcmlwdGlvbi5leGFtcGxlcy5tYXAoKGUpID0+IGAke2V9YCkuam9pbihcIlxcblwiKVxyXG4gICAgICAgICAgOiBcIk5vIGV4YW1wbGVzIHByb3ZpZGVkLlwiXHJcbiAgICAgIH1cXGBgXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgLnNldEF1dGhvcihcclxuICAgICAgICBtZXNzYWdlLm1lbWJlci51c2VyLnRhZyxcclxuICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zZXRUaXRsZShcIkhlbHAgY29tbWFuZC5cIilcclxuICAgICAgLnNldERlc2NyaXB0aW9uKFxyXG4gICAgICAgIGAqKnVzYWdlOioqIFxcYCR7bWVzc2FnZS51dGlsLnBhcnNlZC5wcmVmaXh9JHt0aGlzLmRlc2NyaXB0aW9uLnVzYWdlfVxcYGBcclxuICAgICAgKVxyXG4gICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAuc2V0Rm9vdGVyKHRoaXMuY2xpZW50LnVzZXIudGFnLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy52YWx1ZXMoKSkge1xyXG4gICAgICBpZiAoW1wiZGVmYXVsdFwiXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgZW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgIC5maWx0ZXIoKGNtZCkgPT4gY21kLmFsaWFzZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgIC5tYXAoKGNtZCkgPT4gYFxcYCR7Y21kfVxcYGApXHJcbiAgICAgICAgICAuam9pbihcIiwgXCIgfHwgXCJObyBjb21tYW5kcyBpbiBjYXRlZ29yeS5cIilcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoZW1iZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=