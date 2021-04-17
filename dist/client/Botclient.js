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
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners"),
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command`,
                    timeout: "The command has been automatically canceled due to a timeout...",
                    ended: "The command has been automatically canceled because the tries have been exceeded.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUEyQztBQUMzQywyQ0FBcUM7QUFjckMsTUFBcUIsU0FBVSxTQUFRLDZCQUFZO0lBK0JqRCxZQUFtQixNQUFrQjtRQUNuQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDdEIsT0FBTyxFQUFFLElBQUksb0JBQU8sQ0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFqQ0Usb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNsRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsZUFBTTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLDJDQUEyQztvQkFDbkQsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQy9DLEdBQUcsR0FBRywyQ0FBMkM7b0JBQ25ELE9BQU8sRUFDTCxpRUFBaUU7b0JBQ25FLEtBQUssRUFDSCxtRkFBbUY7b0JBQ3JGLE1BQU0sRUFBRSx5QkFBeUI7b0JBQ2pDLElBQUksRUFBRSxHQUFHO2lCQUNWO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzFCLENBQUMsQ0FBQztRQVFELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQXhERCw0QkF3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgSW50ZW50cyB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCIge1xyXG4gIGludGVyZmFjZSBBa2Fpcm9DbGllbnQge1xyXG4gICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xyXG4gICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm90T3B0aW9ucyB7XHJcbiAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgb3duZXJzPzogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdENsaWVudCBleHRlbmRzIEFrYWlyb0NsaWVudCB7XHJcbiAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcclxuICBwdWJsaWMgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXIgPSBuZXcgTGlzdGVuZXJIYW5kbGVyKHRoaXMsIHtcclxuICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJsaXN0ZW5lcnNcIiksXHJcbiAgfSk7XHJcbiAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XHJcbiAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiY29tbWFuZHNcIiksXHJcbiAgICBwcmVmaXg6IHByZWZpeCxcclxuICAgIGFsbG93TWVudGlvbjogdHJ1ZSxcclxuICAgIGhhbmRsZUVkaXRzOiB0cnVlLFxyXG4gICAgY29tbWFuZFV0aWw6IHRydWUsXHJcbiAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXHJcbiAgICBkZWZhdWx0Q29vbGRvd246IDZlNCxcclxuICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcclxuICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZGAsXHJcbiAgICAgICAgbW9kaWZ5UmV0cnk6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZGAsXHJcbiAgICAgICAgdGltZW91dDpcclxuICAgICAgICAgIFwiVGhlIGNvbW1hbmQgaGFzIGJlZW4gYXV0b21hdGljYWxseSBjYW5jZWxlZCBkdWUgdG8gYSB0aW1lb3V0Li4uXCIsXHJcbiAgICAgICAgZW5kZWQ6XHJcbiAgICAgICAgICBcIlRoZSBjb21tYW5kIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2FuY2VsZWQgYmVjYXVzZSB0aGUgdHJpZXMgaGF2ZSBiZWVuIGV4Y2VlZGVkLlwiLFxyXG4gICAgICAgIGNhbmNlbDogXCJjYW5jZWxlZCB0aGUgY29tbWFuZC4uLlwiLFxyXG4gICAgICAgIHRpbWU6IDNlNCxcclxuICAgICAgfSxcclxuICAgICAgb3RoZXJ3aXNlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnMsXHJcbiAgfSk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IEJvdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgb3duZXJJRDogY29uZmlnLm93bmVycyxcclxuICAgICAgaW50ZW50czogbmV3IEludGVudHMoSW50ZW50cy5BTEwpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xyXG4gICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcclxuICAgICAgbGlzdGVuZXJIYW5kbGVyOiB0aGlzLmxpc3RlbmVySGFuZGxlcixcclxuICAgICAgcHJvY2VzcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy50b2tlbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==