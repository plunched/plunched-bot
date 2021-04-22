"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
const discord_js_1 = require("discord.js");
const db_1 = require("../db");
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners,
            intents: new discord_js_1.Intents(discord_js_1.Intents.ALL),
        });
        this.colors = config_1.colors;
        this.emotes = config_1.emotes;
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners"),
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: async (msg) => {
                await db_1.pool.query("INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING", [msg.guild.id, msg.guild.name, config_1.prefix, 0]);
                await db_1.pool.query("INSERT INTO users (userID, cash, bank) VALUES($1, $2, $2) ON CONFLICT DO NOTHING", [msg.author.id, 0]);
                let guildSettings = await db_1.pool.query("SELECT * FROM guilds WHERE guildID = $1;", [msg.guild.id]);
                return guildSettings.rows[0].prefixes;
            },
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            blockBots: true,
            blockClient: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\nType \`cancel\` to cancel the prompt.`,
                    modifyRetry: (_, str) => `${str}\nType \`cancel\` to cancel the prompt.`,
                    timeout: "The command has been automatically canceled...",
                    ended: "The command has been automatically canceled due to exceeded tries...",
                    cancel: "canceled the command...",
                    time: 3e4,
                },
                otherwise: "",
            },
            ignorePermissions: config_1.owners,
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process,
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUEyRDtBQUMzRCwyQ0FBcUM7QUFDckMsOEJBQTZCO0FBZ0I3QixNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUFpRGpELFlBQW1CLE1BQWtCO1FBQ25DLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsSUFBSSxvQkFBTyxDQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQW5ERSxXQUFNLEdBQUcsZUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxlQUFNLENBQUM7UUFDaEIsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNsRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBOEIsRUFBRTtnQkFDaEQsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLGdIQUFnSCxFQUNoSCxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGVBQU0sRUFBRSxDQUFDLENBQUMsQ0FDMUMsQ0FBQztnQkFDRixNQUFNLFNBQUksQ0FBQyxLQUFLLENBQ2Qsa0ZBQWtGLEVBQ2xGLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ25CLENBQUM7Z0JBRUYsSUFBSSxhQUFhLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNsQywwQ0FBMEMsRUFDMUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNmLENBQUM7Z0JBQ0YsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUN4QyxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsV0FBVyxFQUFFLElBQUk7WUFDakIsV0FBVyxFQUFFLElBQUk7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixXQUFXLEVBQUUsSUFBSTtZQUNqQixtQkFBbUIsRUFBRSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNoQixNQUFNLEVBQUU7b0JBQ04sV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQy9DLEdBQUcsR0FBRyx5Q0FBeUM7b0JBQ2pELFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUMvQyxHQUFHLEdBQUcseUNBQXlDO29CQUNqRCxPQUFPLEVBQUUsZ0RBQWdEO29CQUN6RCxLQUFLLEVBQ0gsc0VBQXNFO29CQUN4RSxNQUFNLEVBQUUseUJBQXlCO29CQUNqQyxJQUFJLEVBQUUsR0FBRztpQkFDVjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNkO1lBQ0QsaUJBQWlCLEVBQUUsZUFBTTtTQUMxQixDQUFDLENBQUM7UUFRRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU8sS0FBSyxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUExRUQsNEJBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWthaXJvQ2xpZW50LCBDb21tYW5kSGFuZGxlciwgTGlzdGVuZXJIYW5kbGVyIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IFVzZXIsIE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgcHJlZml4LCBvd25lcnMsIGNvbG9ycywgZW1vdGVzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBJbnRlbnRzIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi9kYlwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJkaXNjb3JkLWFrYWlyb1wiIHtcclxuICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjtcclxuICAgIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyO1xyXG4gICAgY29sb3JzOiB0eXBlb2YgY29sb3JzO1xyXG4gICAgZW1vdGVzOiB0eXBlb2YgZW1vdGVzO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEJvdE9wdGlvbnMge1xyXG4gIHRva2VuPzogc3RyaW5nO1xyXG4gIG93bmVycz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xyXG4gIHB1YmxpYyBjb25maWc6IEJvdE9wdGlvbnM7XHJcbiAgcHVibGljIGNvbG9ycyA9IGNvbG9ycztcclxuICBwdWJsaWMgZW1vdGVzID0gZW1vdGVzO1xyXG4gIHB1YmxpYyBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xyXG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImxpc3RlbmVyc1wiKSxcclxuICB9KTtcclxuICBwdWJsaWMgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyID0gbmV3IENvbW1hbmRIYW5kbGVyKHRoaXMsIHtcclxuICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJjb21tYW5kc1wiKSxcclxuICAgIHByZWZpeDogYXN5bmMgKG1zZyk6IFByb21pc2U8c3RyaW5nIHwgc3RyaW5nW10+ID0+IHtcclxuICAgICAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgICBcIklOU0VSVCBJTlRPIGd1aWxkcyAoZ3VpbGRJRCwgZ3VpbGROYW1lLCBwcmVmaXhlcywgdG90YWxDb21tYW5kcykgVkFMVUVTKCQxLCAkMiwgJDMsICQ0KSBPTiBDT05GTElDVCBETyBOT1RISU5HXCIsXHJcbiAgICAgICAgW21zZy5ndWlsZC5pZCwgbXNnLmd1aWxkLm5hbWUsIHByZWZpeCwgMF1cclxuICAgICAgKTtcclxuICAgICAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgICBcIklOU0VSVCBJTlRPIHVzZXJzICh1c2VySUQsIGNhc2gsIGJhbmspIFZBTFVFUygkMSwgJDIsICQyKSBPTiBDT05GTElDVCBETyBOT1RISU5HXCIsXHJcbiAgICAgICAgW21zZy5hdXRob3IuaWQsIDBdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQgZ3VpbGRTZXR0aW5ncyA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgICAgXCJTRUxFQ1QgKiBGUk9NIGd1aWxkcyBXSEVSRSBndWlsZElEID0gJDE7XCIsXHJcbiAgICAgICAgW21zZy5ndWlsZC5pZF1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGd1aWxkU2V0dGluZ3Mucm93c1swXS5wcmVmaXhlcztcclxuICAgIH0sXHJcbiAgICBhbGxvd01lbnRpb246IHRydWUsXHJcbiAgICBoYW5kbGVFZGl0czogdHJ1ZSxcclxuICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxyXG4gICAgYmxvY2tCb3RzOiB0cnVlLFxyXG4gICAgYmxvY2tDbGllbnQ6IHRydWUsXHJcbiAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXHJcbiAgICBkZWZhdWx0Q29vbGRvd246IDZlNCxcclxuICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcclxuICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgcHJvbXB0LmAsXHJcbiAgICAgICAgbW9kaWZ5UmV0cnk6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgcHJvbXB0LmAsXHJcbiAgICAgICAgdGltZW91dDogXCJUaGUgY29tbWFuZCBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNhbmNlbGVkLi4uXCIsXHJcbiAgICAgICAgZW5kZWQ6XHJcbiAgICAgICAgICBcIlRoZSBjb21tYW5kIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2FuY2VsZWQgZHVlIHRvIGV4Y2VlZGVkIHRyaWVzLi4uXCIsXHJcbiAgICAgICAgY2FuY2VsOiBcImNhbmNlbGVkIHRoZSBjb21tYW5kLi4uXCIsXHJcbiAgICAgICAgdGltZTogM2U0LFxyXG4gICAgICB9LFxyXG4gICAgICBvdGhlcndpc2U6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgaWdub3JlUGVybWlzc2lvbnM6IG93bmVycyxcclxuICB9KTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucykge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBvd25lcklEOiBjb25maWcub3duZXJzLFxyXG4gICAgICBpbnRlbnRzOiBuZXcgSW50ZW50cyhJbnRlbnRzLkFMTCksXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgX2luaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLnVzZUxpc3RlbmVySGFuZGxlcih0aGlzLmxpc3RlbmVySGFuZGxlcik7XHJcbiAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5zZXRFbWl0dGVycyh7XHJcbiAgICAgIGNvbW1hbmRIYW5kbGVyOiB0aGlzLmNvbW1hbmRIYW5kbGVyLFxyXG4gICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxyXG4gICAgICBwcm9jZXNzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGF3YWl0IHRoaXMuX2luaXQoKTtcclxuICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKTtcclxuICB9XHJcbn1cclxuIl19