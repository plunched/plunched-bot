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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlubmlzaExpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpc3RlbmVycy9jb21tYW5kTGlzdGVuZXIvRmlubmlzaExpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQW1EO0FBRW5ELGlDQUFnQztBQUVoQyxNQUFxQixnQkFBaUIsU0FBUSx5QkFBUTtJQUNwRDtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUN2QixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsUUFBUSxFQUFFLGlCQUFpQjtTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUNoQyxTQUFJLENBQUMsS0FBSyxDQUFDOzs7d0JBR1MsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQWZELG1DQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIsIENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHBvb2wgfSBmcm9tIFwiLi4vLi4vZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZpbm5pc2hMaXN0ZW5lcnMgZXh0ZW5kcyBMaXN0ZW5lciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImZpbm5pc2hMaXN0ZW5lclwiLCB7XHJcbiAgICAgIGVtaXR0ZXI6IFwiY29tbWFuZEhhbmRsZXJcIixcclxuICAgICAgZXZlbnQ6IFwiY29tbWFuZEZpbmlzaGVkXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImNvbW1hbmRMaXN0ZW5lclwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBwb29sLnF1ZXJ5KGBcclxuICAgICAgVVBEQVRFIGd1aWxkc1xyXG4gICAgICBTRVQgdG90YWxDb21tYW5kcyA9IHRvdGFsQ29tbWFuZHMgKyAxXHJcbiAgICAgIFdIRVJFIGd1aWxkSUQgPSAke21lc3NhZ2UuZ3VpbGQuaWR9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==