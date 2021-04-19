"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const ms_1 = require("ms");
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
            .setTitle(`${command} is in cooldown`)
            .setDescription(`You reached the ratelimit, command available in \`${ms_1.ms(remaining)}\``));
    }
}
exports.default = cooldownListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vbGRvd25MaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY29tbWFuZExpc3RlbmVyL2Nvb2xkb3duTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBbUQ7QUFDbkQsMkNBQW1EO0FBQ25ELDJCQUF3QjtBQUV4QixNQUFxQixnQkFBaUIsU0FBUSx5QkFBUTtJQUNwRDtRQUNFLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2YsT0FBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsU0FBd0I7UUFFeEIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUM1QixJQUFJLHlCQUFZLEVBQUU7YUFDZixRQUFRLENBQUMsR0FBRyxPQUFPLGlCQUFpQixDQUFDO2FBQ3JDLGNBQWMsQ0FDYixxREFBcUQsT0FBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3ZFLENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXRCRCxtQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciwgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBtcyB9IGZyb20gXCJtc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29vbGRvd25MaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiY29vbGRvd25MaXN0ZW5lclwiLCB7XHJcbiAgICAgIGVtaXR0ZXI6IFwiY29tbWFuZEhhbmRsZXJcIixcclxuICAgICAgZXZlbnQ6IFwiY29vbGRvd25cIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY29tbWFuZExpc3RlbmVyXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIGNvbW1hbmQ6IENvbW1hbmQsXHJcbiAgICByZW1haW5pbmc6IERhdGUgfCBudW1iZXJcclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBhd2FpdCBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldFRpdGxlKGAke2NvbW1hbmR9IGlzIGluIGNvb2xkb3duYClcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oXHJcbiAgICAgICAgICBgWW91IHJlYWNoZWQgdGhlIHJhdGVsaW1pdCwgY29tbWFuZCBhdmFpbGFibGUgaW4gXFxgJHttcyhyZW1haW5pbmcpfVxcYGBcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=