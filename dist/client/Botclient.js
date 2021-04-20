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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUFtRDtBQUNuRCwyQ0FBcUM7QUFnQnJDLE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQWdDakQsWUFBbUIsTUFBa0I7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLG9CQUFPLENBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBbENFLFdBQU0sR0FBRyxlQUFNLENBQUM7UUFDaEIsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNsRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsZUFBTTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsbUJBQW1CLEVBQUUsR0FBRztZQUN4QixlQUFlLEVBQUUsR0FBRztZQUNwQixnQkFBZ0IsRUFBRTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUMvQyxHQUFHLEdBQUcseUNBQXlDO29CQUNqRCxXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLHlDQUF5QztvQkFDakQsT0FBTyxFQUFFLGdEQUFnRDtvQkFDekQsS0FBSyxFQUNILHNFQUFzRTtvQkFDeEUsTUFBTSxFQUFFLHlCQUF5QjtvQkFDakMsSUFBSSxFQUFFLEdBQUc7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZDtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDMUIsQ0FBQyxDQUFDO1FBUUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBekRELDRCQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBVc2VyLCBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzLCBjb2xvcnMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEludGVudHMgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJkaXNjb3JkLWFrYWlyb1wiIHtcclxuICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjtcclxuICAgIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyO1xyXG4gICAgY29sb3JzOiB0eXBlb2YgY29sb3JzO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEJvdE9wdGlvbnMge1xyXG4gIHRva2VuPzogc3RyaW5nO1xyXG4gIG93bmVycz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIGNvbG9ycz86IG9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQWthaXJvQ2xpZW50IHtcclxuICBwdWJsaWMgY29uZmlnOiBCb3RPcHRpb25zO1xyXG4gIHB1YmxpYyBjb2xvcnMgPSBjb2xvcnM7XHJcbiAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XHJcbiAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwibGlzdGVuZXJzXCIpLFxyXG4gIH0pO1xyXG4gIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xyXG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxyXG4gICAgcHJlZml4OiBwcmVmaXgsXHJcbiAgICBhbGxvd01lbnRpb246IHRydWUsXHJcbiAgICBoYW5kbGVFZGl0czogdHJ1ZSxcclxuICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxyXG4gICAgYmxvY2tCb3RzOiB0cnVlLFxyXG4gICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxyXG4gICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXHJcbiAgICBhcmd1bWVudERlZmF1bHRzOiB7XHJcbiAgICAgIHByb21wdDoge1xyXG4gICAgICAgIG1vZGlmeVN0YXJ0OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIHByb21wdC5gLFxyXG4gICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIHByb21wdC5gLFxyXG4gICAgICAgIHRpbWVvdXQ6IFwiVGhlIGNvbW1hbmQgaGFzIGJlZW4gYXV0b21hdGljYWxseSBjYW5jZWxlZC4uLlwiLFxyXG4gICAgICAgIGVuZGVkOlxyXG4gICAgICAgICAgXCJUaGUgY29tbWFuZCBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNhbmNlbGVkIGR1ZSB0byBleGNlZWRlZCB0cmllcy4uLlwiLFxyXG4gICAgICAgIGNhbmNlbDogXCJjYW5jZWxlZCB0aGUgY29tbWFuZC4uLlwiLFxyXG4gICAgICAgIHRpbWU6IDNlNCxcclxuICAgICAgfSxcclxuICAgICAgb3RoZXJ3aXNlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnMsXHJcbiAgfSk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IEJvdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgb3duZXJJRDogY29uZmlnLm93bmVycyxcclxuICAgICAgaW50ZW50czogbmV3IEludGVudHMoSW50ZW50cy5BTEwpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xyXG4gICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcclxuICAgICAgbGlzdGVuZXJIYW5kbGVyOiB0aGlzLmxpc3RlbmVySGFuZGxlcixcclxuICAgICAgcHJvY2VzcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy50b2tlbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==