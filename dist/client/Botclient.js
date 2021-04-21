"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
const discord_js_1 = require("discord.js");
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners,
            intents: new discord_js_1.Intents(discord_js_1.Intents.ALL),
        });
        this.colors = config_1.colors;
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners"),
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUFtRDtBQUNuRCwyQ0FBcUM7QUFnQnJDLE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQWlDakQsWUFBbUIsTUFBa0I7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLG9CQUFPLENBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBbkNFLFdBQU0sR0FBRyxlQUFNLENBQUM7UUFDaEIsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNsRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsZUFBTTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUk7WUFDakIsbUJBQW1CLEVBQUUsR0FBRztZQUN4QixlQUFlLEVBQUUsR0FBRztZQUNwQixnQkFBZ0IsRUFBRTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUMvQyxHQUFHLEdBQUcseUNBQXlDO29CQUNqRCxXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLHlDQUF5QztvQkFDakQsT0FBTyxFQUFFLGdEQUFnRDtvQkFDekQsS0FBSyxFQUNILHNFQUFzRTtvQkFDeEUsTUFBTSxFQUFFLHlCQUF5QjtvQkFDakMsSUFBSSxFQUFFLEdBQUc7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZDtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDMUIsQ0FBQyxDQUFDO1FBUUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBMURELDRCQTBEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBVc2VyLCBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzLCBjb2xvcnMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEludGVudHMgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJkaXNjb3JkLWFrYWlyb1wiIHtcclxuICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjtcclxuICAgIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyO1xyXG4gICAgY29sb3JzOiB0eXBlb2YgY29sb3JzO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEJvdE9wdGlvbnMge1xyXG4gIHRva2VuPzogc3RyaW5nO1xyXG4gIG93bmVycz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIGNvbG9ycz86IG9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQWthaXJvQ2xpZW50IHtcclxuICBwdWJsaWMgY29uZmlnOiBCb3RPcHRpb25zO1xyXG4gIHB1YmxpYyBjb2xvcnMgPSBjb2xvcnM7XHJcbiAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XHJcbiAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwibGlzdGVuZXJzXCIpLFxyXG4gIH0pO1xyXG4gIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xyXG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxyXG4gICAgcHJlZml4OiBwcmVmaXgsXHJcbiAgICBhbGxvd01lbnRpb246IHRydWUsXHJcbiAgICBoYW5kbGVFZGl0czogdHJ1ZSxcclxuICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxyXG4gICAgYmxvY2tCb3RzOiB0cnVlLFxyXG4gICAgYmxvY2tDbGllbnQ6IHRydWUsXHJcbiAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXHJcbiAgICBkZWZhdWx0Q29vbGRvd246IDZlNCxcclxuICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcclxuICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgcHJvbXB0LmAsXHJcbiAgICAgICAgbW9kaWZ5UmV0cnk6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgcHJvbXB0LmAsXHJcbiAgICAgICAgdGltZW91dDogXCJUaGUgY29tbWFuZCBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNhbmNlbGVkLi4uXCIsXHJcbiAgICAgICAgZW5kZWQ6XHJcbiAgICAgICAgICBcIlRoZSBjb21tYW5kIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2FuY2VsZWQgZHVlIHRvIGV4Y2VlZGVkIHRyaWVzLi4uXCIsXHJcbiAgICAgICAgY2FuY2VsOiBcImNhbmNlbGVkIHRoZSBjb21tYW5kLi4uXCIsXHJcbiAgICAgICAgdGltZTogM2U0LFxyXG4gICAgICB9LFxyXG4gICAgICBvdGhlcndpc2U6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgaWdub3JlUGVybWlzc2lvbnM6IG93bmVycyxcclxuICB9KTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucykge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBvd25lcklEOiBjb25maWcub3duZXJzLFxyXG4gICAgICBpbnRlbnRzOiBuZXcgSW50ZW50cyhJbnRlbnRzLkFMTCksXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgX2luaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLnVzZUxpc3RlbmVySGFuZGxlcih0aGlzLmxpc3RlbmVySGFuZGxlcik7XHJcbiAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5zZXRFbWl0dGVycyh7XHJcbiAgICAgIGNvbW1hbmRIYW5kbGVyOiB0aGlzLmNvbW1hbmRIYW5kbGVyLFxyXG4gICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxyXG4gICAgICBwcm9jZXNzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGF3YWl0IHRoaXMuX2luaXQoKTtcclxuICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKTtcclxuICB9XHJcbn1cclxuIl19