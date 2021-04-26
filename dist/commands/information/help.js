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
            if (command.userPermissions) {
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
        return message.channel.send(embed);
    }
}
exports.default = helpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDOUM7UUFDRSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7WUFDckMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7YUFDakM7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsU0FBUztvQkFDYixJQUFJLEVBQUUsY0FBYztpQkFDckI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxPQUFPLEVBQXdCO1FBRWpDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxZQUFZLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUNsQyxRQUFRLENBQUMsUUFBUSxPQUFPLEVBQUUsQ0FBQztpQkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDcEMsUUFBUSxDQUNQLFFBQVEsRUFDUixLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLG1CQUFtQixJQUFJLENBQzFELENBQUM7WUFFSixJQUFJLE9BQU8sQ0FBQyxlQUFlLEVBQUU7Z0JBQzNCLFlBQVksQ0FBQyxRQUFRLENBQ25CLFdBQVcsRUFDWCxLQUNFLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUTtvQkFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzVELENBQUMsQ0FBQyx1QkFDTixJQUFJLENBQ0wsQ0FBQzthQUNIO1lBRUQsWUFBWSxDQUFDLFFBQVEsQ0FDbkIsVUFBVSxFQUNWLEtBQ0UsT0FBTyxDQUFDLE9BQU87Z0JBQ2IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLHVCQUNOLElBQUksQ0FDTCxDQUFDO1lBRUYsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtnQkFDbkMsWUFBWSxDQUFDLFFBQVEsQ0FDbkIsY0FBYyxFQUNkLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FDckMsQ0FBQzthQUNIO1lBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4QztRQUVELE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUM3QixTQUFTLENBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ25EO2FBQ0EsUUFBUSxDQUFDLGVBQWUsQ0FBQzthQUN6QixjQUFjLENBQ2IsZ0JBQWdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxDQUN4RTthQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDcEMsWUFBWSxFQUFFO2FBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFeEUsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQUUsU0FBUztZQUVoRCxLQUFLLENBQUMsUUFBUSxDQUNaLFFBQVEsQ0FBQyxFQUFFLEVBQ1gsUUFBUTtpQkFDTCxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDdkMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUMxQixJQUFJLENBQUMsSUFBSSxJQUFJLDBCQUEwQixDQUFDLENBQzVDLENBQUM7U0FDSDtRQUVELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBMUZELDhCQTBGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhlbHBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImhlbHBcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJoZWxwXCIsIFwiY29tbWFuZHNcIiwgXCJjbWRzXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscHMgeW91IG91dCB3aXRoIGFueSBjb21tYW5kXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiaGVscCA8Y29tbWFuZD5cIixcclxuICAgICAgICBleGFtcGxlczogW1wibGlua3NcIiwgXCJoZWxwIHBpbmdcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcImNvbW1hbmRcIixcclxuICAgICAgICAgIHR5cGU6IFwiY29tbWFuZEFsaWFzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBjb21tYW5kIH06IHsgY29tbWFuZDogQ29tbWFuZCB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBpZiAoY29tbWFuZCkge1xyXG4gICAgICBsZXQgY29tbWFuZEVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldFRpdGxlKGBIZWxwICR7Y29tbWFuZH1gKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAuYWRkRmllbGQoXHJcbiAgICAgICAgICBcIlVzYWdlOlwiLFxyXG4gICAgICAgICAgYFxcYCR7Y29tbWFuZC5kZXNjcmlwdGlvbi51c2FnZSB8fCBcIk5vIHVzYWdlIHByb3ZpZGUuXCJ9XFxgYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBpZiAoY29tbWFuZC51c2VyUGVybWlzc2lvbnMpIHtcclxuICAgICAgICBjb21tYW5kRW1iZWQuYWRkRmllbGQoXHJcbiAgICAgICAgICBcIkV4YW1wbGVzOlwiLFxyXG4gICAgICAgICAgYFxcYCR7XHJcbiAgICAgICAgICAgIGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXNcclxuICAgICAgICAgICAgICA/IGNvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMubWFwKChlKSA9PiBgJHtlfWApLmpvaW4oXCJcXG5cIilcclxuICAgICAgICAgICAgICA6IFwibm8gZXhhbXBsZXMgcHJvdmlkZWQuXCJcclxuICAgICAgICAgIH1cXGBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29tbWFuZEVtYmVkLmFkZEZpZWxkKFxyXG4gICAgICAgIFwiQWxpYXNlczpcIixcclxuICAgICAgICBgXFxgJHtcclxuICAgICAgICAgIGNvbW1hbmQuYWxpYXNlc1xyXG4gICAgICAgICAgICA/IGNvbW1hbmQuYWxpYXNlcy5tYXAoKGUpID0+IGAke2V9YCkuam9pbihcIiwgXCIpXHJcbiAgICAgICAgICAgIDogXCJubyBleGFtcGxlcyBwcm92aWRlZC5cIlxyXG4gICAgICAgIH1cXGBgXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoY29tbWFuZC5kZXNjcmlwdGlvbi5QZXJtaXNzaW9ucykge1xyXG4gICAgICAgIGNvbW1hbmRFbWJlZC5hZGRGaWVsZChcclxuICAgICAgICAgIFwiUGVybWlzc2lvbnM6XCIsXHJcbiAgICAgICAgICBgJHtjb21tYW5kLmRlc2NyaXB0aW9uLlBlcm1pc3Npb25zfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoY29tbWFuZEVtYmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAuc2V0QXV0aG9yKFxyXG4gICAgICAgIG1lc3NhZ2UubWVtYmVyLnVzZXIudGFnLFxyXG4gICAgICAgIG1lc3NhZ2UuYXV0aG9yLmRpc3BsYXlBdmF0YXJVUkwoeyBkeW5hbWljOiB0cnVlIH0pXHJcbiAgICAgIClcclxuICAgICAgLnNldFRpdGxlKFwiSGVscCBjb21tYW5kLlwiKVxyXG4gICAgICAuc2V0RGVzY3JpcHRpb24oXHJcbiAgICAgICAgYCoqdXNhZ2U6KiogXFxgJHttZXNzYWdlLnV0aWwucGFyc2VkLnByZWZpeH0ke3RoaXMuZGVzY3JpcHRpb24udXNhZ2V9XFxgYFxyXG4gICAgICApXHJcbiAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgLnNldFRpbWVzdGFtcCgpXHJcbiAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIHRoaXMuaGFuZGxlci5jYXRlZ29yaWVzLnZhbHVlcygpKSB7XHJcbiAgICAgIGlmIChbXCJkZWZhdWx0XCJdLmluY2x1ZGVzKGNhdGVnb3J5LmlkKSkgY29udGludWU7XHJcblxyXG4gICAgICBlbWJlZC5hZGRGaWVsZChcclxuICAgICAgICBjYXRlZ29yeS5pZCxcclxuICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgLmZpbHRlcigoY21kKSA9PiBjbWQuYWxpYXNlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgLm1hcCgoY21kKSA9PiBgXFxgJHtjbWR9XFxgYClcclxuICAgICAgICAgIC5qb2luKFwiLCBcIiB8fCBcIk5vIGNvbW1hbmRzIGluIGNhdGVnb3J5LlwiKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChlbWJlZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==