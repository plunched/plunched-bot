"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const db_1 = require("../../db");
class finnishListeners extends discord_akairo_1.Listener {
    constructor() {
        super("finnishListener", {
            emitter: "commandHandler",
            event: "commandFinished",
            category: "commandListener",
        });
    }
    async exec(message) {
        db_1.pool.query(`
      UPDATE guilds
      SET totalCommands = totalCommands + 1
      WHERE guildID = ${message.guild.id}`);
    }
}
exports.default = finnishListeners;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlubmlzaExpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpc3RlbmVycy9jb21tYW5kL0Zpbm5pc2hMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFtRDtBQUVuRCxpQ0FBZ0M7QUFFaEMsTUFBcUIsZ0JBQWlCLFNBQVEseUJBQVE7SUFDcEQ7UUFDRSxLQUFLLENBQUMsaUJBQWlCLEVBQUU7WUFDdkIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDaEMsU0FBSSxDQUFDLEtBQUssQ0FBQzs7O3dCQUdTLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFmRCxtQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyLCBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uLy4uL2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmaW5uaXNoTGlzdGVuZXJzIGV4dGVuZHMgTGlzdGVuZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJmaW5uaXNoTGlzdGVuZXJcIiwge1xyXG4gICAgICBlbWl0dGVyOiBcImNvbW1hbmRIYW5kbGVyXCIsXHJcbiAgICAgIGV2ZW50OiBcImNvbW1hbmRGaW5pc2hlZFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJjb21tYW5kTGlzdGVuZXJcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcG9vbC5xdWVyeShgXHJcbiAgICAgIFVQREFURSBndWlsZHNcclxuICAgICAgU0VUIHRvdGFsQ29tbWFuZHMgPSB0b3RhbENvbW1hbmRzICsgMVxyXG4gICAgICBXSEVSRSBndWlsZElEID0gJHttZXNzYWdlLmd1aWxkLmlkfWApO1xyXG4gIH1cclxufVxyXG4iXX0=