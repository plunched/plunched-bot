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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyTWVtYmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9zZXJ2ZXJNZW1iZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixvQkFBcUIsU0FBUSx3QkFBTztJQUN2RDtRQUNFLEtBQUssQ0FBQyxzQkFBc0IsRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixDQUFDO1lBQ3ZELFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsNkNBQTZDO2dCQUN0RCxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7YUFDeEM7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUkseUJBQVksRUFBRTthQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDcEMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUMxRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQ2hCO1VBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUMzQixDQUFDLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLHdCQUNoQztVQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUNoQixpQkFBaUIsQ0FBQyxDQUNuQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBN0JELHVDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlcnZlck1lbWJlcnNDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcInNlcnZlck1lbWJlcnNDb21tYW5kXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wic2VydmVyTWVtYmVyc1wiLCBcIm1lbWJlcnNcIiwgXCJzZXJ2ZXItbWVtYmVyc1wiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcInJldHVybnMgdGhlIGFtb3VudCBvZiBtZW1iZXJzIGluIHRoZSBzZXJ2ZXJcIixcclxuICAgICAgICB1c2FnZTogXCJzZXJ2ZXItbWVtYmVyc1wiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJzZXJ2ZXItbWVtYmVyc1wiLCBcIm1lbWJlcnNcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgLnNldFRpdGxlKGAke21lc3NhZ2UuZ3VpbGQubmFtZX0nbWVtYmVyc2ApLnNldERlc2NyaXB0aW9uKGAke1xyXG4gICAgICAgIG1lc3NhZ2UuZ3VpbGQubmFtZVxyXG4gICAgICB9IGhhczpcclxuICAgICAgICAke3RoaXMuY2xpZW50LmVtb3Rlcy5vbmxpbmV9ICR7XHJcbiAgICAgICAgKGF3YWl0IG1lc3NhZ2UuZ3VpbGQuZmV0Y2goKSkuYXBwcm94aW1hdGVQcmVzZW5jZUNvdW50XHJcbiAgICAgIH0gb25saW5lIG1lbWJlcnNcclxuICAgICAgICAke3RoaXMuY2xpZW50LmVtb3Rlcy5vZmZsaW5lfSAke1xyXG4gICAgICAgIG1lc3NhZ2UuZ3VpbGQubWVtYmVyQ291bnRcclxuICAgICAgfSBvZmZsaW5lIG1lbWJlcmApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=