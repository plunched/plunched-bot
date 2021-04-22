"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class serverMembersCommand extends discord_akairo_1.Command {
    constructor() {
        super("serverMembersCommand", {
            aliases: ["serverMembers", "members", "server-members"],
            category: "information",
            description: {
                content: "returns the amount of members in the server",
                usage: "server-members",
                examples: ["server-members", "members"],
            },
            ratelimit: 3,
        });
    }
    async exec(message) {
        return message.util.send(new discord_js_1.MessageEmbed()
            .setColor(this.client.colors.default)
            .setTitle(`${message.guild.name}'members`).setDescription(`${message.guild.name} has:
        ${this.client.emotes.online} ${(await message.guild.fetch()).approximatePresenceCount} online members
        ${this.client.emotes.offline} ${message.guild.memberCount} offline member`));
    }
}
exports.default = serverMembersCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyTWVtYmVyc0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvaW5mb3JtYXRpb24vc2VydmVyTWVtYmVyc0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBRW5ELE1BQXFCLG9CQUFxQixTQUFRLHdCQUFPO0lBQ3ZEO1FBQ0UsS0FBSyxDQUFDLHNCQUFzQixFQUFFO1lBQzVCLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLENBQUM7WUFDdkQsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSw2Q0FBNkM7Z0JBQ3RELEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQzthQUN4QztZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDaEMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEIsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQzFELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFDaEI7VUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQzNCLENBQUMsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsd0JBQ2hDO1VBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQ2hCLGlCQUFpQixDQUFDLENBQ25CLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE3QkQsdUNBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VydmVyTWVtYmVyc0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwic2VydmVyTWVtYmVyc0NvbW1hbmRcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJzZXJ2ZXJNZW1iZXJzXCIsIFwibWVtYmVyc1wiLCBcInNlcnZlci1tZW1iZXJzXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvcm1hdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwicmV0dXJucyB0aGUgYW1vdW50IG9mIG1lbWJlcnMgaW4gdGhlIHNlcnZlclwiLFxyXG4gICAgICAgIHVzYWdlOiBcInNlcnZlci1tZW1iZXJzXCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcInNlcnZlci1tZW1iZXJzXCIsIFwibWVtYmVyc1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAuc2V0VGl0bGUoYCR7bWVzc2FnZS5ndWlsZC5uYW1lfSdtZW1iZXJzYCkuc2V0RGVzY3JpcHRpb24oYCR7XHJcbiAgICAgICAgbWVzc2FnZS5ndWlsZC5uYW1lXHJcbiAgICAgIH0gaGFzOlxyXG4gICAgICAgICR7dGhpcy5jbGllbnQuZW1vdGVzLm9ubGluZX0gJHtcclxuICAgICAgICAoYXdhaXQgbWVzc2FnZS5ndWlsZC5mZXRjaCgpKS5hcHByb3hpbWF0ZVByZXNlbmNlQ291bnRcclxuICAgICAgfSBvbmxpbmUgbWVtYmVyc1xyXG4gICAgICAgICR7dGhpcy5jbGllbnQuZW1vdGVzLm9mZmxpbmV9ICR7XHJcbiAgICAgICAgbWVzc2FnZS5ndWlsZC5tZW1iZXJDb3VudFxyXG4gICAgICB9IG9mZmxpbmUgbWVtYmVyYClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==