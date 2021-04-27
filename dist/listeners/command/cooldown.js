"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const ms = require("ms");
class cooldownListener extends discord_akairo_1.Listener {
    constructor() {
        super("cooldownListener", {
            emitter: "commandHandler",
            event: "cooldown",
            category: "commandListener",
        });
    }
    async exec(message, command, remaining) {
        return await message.util.send(new discord_js_1.MessageEmbed()
            .setAuthor(message.member.user.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`${command} is in cooldown`)
            .setDescription(`You reached the ratelimit, command available in \`${ms(remaining)}\``)
            .setTimestamp()
            .setColor(this.client.colors.red)
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = cooldownListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vbGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NvbW1hbmQvY29vbGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBbUQ7QUFDbkQsMkNBQW1EO0FBQ25ELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixNQUFxQixnQkFBaUIsU0FBUSx5QkFBUTtJQUNwRDtRQUNFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2YsT0FBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsU0FBd0I7UUFFeEIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUM1QixJQUFJLHlCQUFZLEVBQUU7YUFDZixTQUFTLENBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ25EO2FBQ0EsUUFBUSxDQUFDLEdBQUcsT0FBTyxpQkFBaUIsQ0FBQzthQUNyQyxjQUFjLENBQ2IscURBQXFELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN2RTthQUNBLFlBQVksRUFBRTthQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDaEMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQ3hFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE3QkQsbUNBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIsIENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuY29uc3QgbXMgPSByZXF1aXJlKFwibXNcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb29sZG93bkxpc3RlbmVyIGV4dGVuZHMgTGlzdGVuZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJjb29sZG93bkxpc3RlbmVyXCIsIHtcclxuICAgICAgZW1pdHRlcjogXCJjb21tYW5kSGFuZGxlclwiLFxyXG4gICAgICBldmVudDogXCJjb29sZG93blwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJjb21tYW5kTGlzdGVuZXJcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgY29tbWFuZDogQ29tbWFuZCxcclxuICAgIHJlbWFpbmluZzogRGF0ZSB8IG51bWJlclxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0QXV0aG9yKFxyXG4gICAgICAgICAgbWVzc2FnZS5tZW1iZXIudXNlci50YWcsXHJcbiAgICAgICAgICBtZXNzYWdlLmF1dGhvci5kaXNwbGF5QXZhdGFyVVJMKHsgZHluYW1pYzogdHJ1ZSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICAuc2V0VGl0bGUoYCR7Y29tbWFuZH0gaXMgaW4gY29vbGRvd25gKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihcclxuICAgICAgICAgIGBZb3UgcmVhY2hlZCB0aGUgcmF0ZWxpbWl0LCBjb21tYW5kIGF2YWlsYWJsZSBpbiBcXGAke21zKHJlbWFpbmluZyl9XFxgYFxyXG4gICAgICAgIClcclxuICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLnJlZClcclxuICAgICAgICAuc2V0Rm9vdGVyKHRoaXMuY2xpZW50LnVzZXIudGFnLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==