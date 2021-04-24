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
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = cooldownListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vbGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NvbW1hbmQvY29vbGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBbUQ7QUFDbkQsMkNBQW1EO0FBQ25ELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixNQUFxQixnQkFBaUIsU0FBUSx5QkFBUTtJQUNwRDtRQUNFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2YsT0FBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsU0FBd0I7UUFFeEIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUM1QixJQUFJLHlCQUFZLEVBQUU7YUFDZixTQUFTLENBQ1IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ25EO2FBQ0EsUUFBUSxDQUFDLEdBQUcsT0FBTyxpQkFBaUIsQ0FBQzthQUNyQyxjQUFjLENBQ2IscURBQXFELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN2RTthQUNBLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBNUJELG1DQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyLCBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmNvbnN0IG1zID0gcmVxdWlyZShcIm1zXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29vbGRvd25MaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiY29vbGRvd25MaXN0ZW5lclwiLCB7XHJcbiAgICAgIGVtaXR0ZXI6IFwiY29tbWFuZEhhbmRsZXJcIixcclxuICAgICAgZXZlbnQ6IFwiY29vbGRvd25cIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY29tbWFuZExpc3RlbmVyXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIGNvbW1hbmQ6IENvbW1hbmQsXHJcbiAgICByZW1haW5pbmc6IERhdGUgfCBudW1iZXJcclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBhd2FpdCBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldEF1dGhvcihcclxuICAgICAgICAgIG1lc3NhZ2UubWVtYmVyLnVzZXIudGFnLFxyXG4gICAgICAgICAgbWVzc2FnZS5hdXRob3IuZGlzcGxheUF2YXRhclVSTCh7IGR5bmFtaWM6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnNldFRpdGxlKGAke2NvbW1hbmR9IGlzIGluIGNvb2xkb3duYClcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oXHJcbiAgICAgICAgICBgWW91IHJlYWNoZWQgdGhlIHJhdGVsaW1pdCwgY29tbWFuZCBhdmFpbGFibGUgaW4gXFxgJHttcyhyZW1haW5pbmcpfVxcYGBcclxuICAgICAgICApXHJcbiAgICAgICAgLnNldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgLnNldEZvb3Rlcih0aGlzLmNsaWVudC51c2VyLnRhZywgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=