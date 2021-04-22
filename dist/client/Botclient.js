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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUFtRDtBQUNuRCwyQ0FBcUM7QUFDckMsOEJBQTZCO0FBZ0I3QixNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUFnRGpELFlBQW1CLE1BQWtCO1FBQ25DLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsSUFBSSxvQkFBTyxDQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQWxERSxXQUFNLEdBQUcsZUFBTSxDQUFDO1FBQ2hCLG9CQUFlLEdBQW9CLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDbEUsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztTQUM5QyxDQUFDLENBQUM7UUFDSSxtQkFBYyxHQUFtQixJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFO1lBQy9ELFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7WUFDNUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQThCLEVBQUU7Z0JBQ2hELE1BQU0sU0FBSSxDQUFDLEtBQUssQ0FDZCxnSEFBZ0gsRUFDaEgsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxlQUFNLEVBQUUsQ0FBQyxDQUFDLENBQzFDLENBQUM7Z0JBQ0YsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLGtGQUFrRixFQUNsRixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUNuQixDQUFDO2dCQUVGLElBQUksYUFBYSxHQUFHLE1BQU0sU0FBSSxDQUFDLEtBQUssQ0FDbEMsMENBQTBDLEVBQzFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDZixDQUFDO2dCQUNGLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDeEMsQ0FBQztZQUNELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUk7WUFDakIsbUJBQW1CLEVBQUUsR0FBRztZQUN4QixlQUFlLEVBQUUsR0FBRztZQUNwQixnQkFBZ0IsRUFBRTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUMvQyxHQUFHLEdBQUcseUNBQXlDO29CQUNqRCxXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLHlDQUF5QztvQkFDakQsT0FBTyxFQUFFLGdEQUFnRDtvQkFDekQsS0FBSyxFQUNILHNFQUFzRTtvQkFDeEUsTUFBTSxFQUFFLHlCQUF5QjtvQkFDakMsSUFBSSxFQUFFLEdBQUc7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZDtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDMUIsQ0FBQyxDQUFDO1FBUUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBekVELDRCQXlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBVc2VyLCBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzLCBjb2xvcnMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEludGVudHMgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uL2RiXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCIge1xyXG4gIGludGVyZmFjZSBBa2Fpcm9DbGllbnQge1xyXG4gICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xyXG4gICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgICBjb2xvcnM6IHR5cGVvZiBjb2xvcnM7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm90T3B0aW9ucyB7XHJcbiAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgb3duZXJzPzogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgY29sb3JzPzogb2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xyXG4gIHB1YmxpYyBjb25maWc6IEJvdE9wdGlvbnM7XHJcbiAgcHVibGljIGNvbG9ycyA9IGNvbG9ycztcclxuICBwdWJsaWMgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXIgPSBuZXcgTGlzdGVuZXJIYW5kbGVyKHRoaXMsIHtcclxuICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJsaXN0ZW5lcnNcIiksXHJcbiAgfSk7XHJcbiAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XHJcbiAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiY29tbWFuZHNcIiksXHJcbiAgICBwcmVmaXg6IGFzeW5jIChtc2cpOiBQcm9taXNlPHN0cmluZyB8IHN0cmluZ1tdPiA9PiB7XHJcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBndWlsZHMgKGd1aWxkSUQsIGd1aWxkTmFtZSwgcHJlZml4ZXMsIHRvdGFsQ29tbWFuZHMpIFZBTFVFUygkMSwgJDIsICQzLCAkNCkgT04gQ09ORkxJQ1QgRE8gTk9USElOR1wiLFxyXG4gICAgICAgIFttc2cuZ3VpbGQuaWQsIG1zZy5ndWlsZC5uYW1lLCBwcmVmaXgsIDBdXHJcbiAgICAgICk7XHJcbiAgICAgIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICAgICAgXCJJTlNFUlQgSU5UTyB1c2VycyAodXNlcklELCBjYXNoLCBiYW5rKSBWQUxVRVMoJDEsICQyLCAkMikgT04gQ09ORkxJQ1QgRE8gTk9USElOR1wiLFxyXG4gICAgICAgIFttc2cuYXV0aG9yLmlkLCAwXVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGd1aWxkU2V0dGluZ3MgPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICAgIFwiU0VMRUNUICogRlJPTSBndWlsZHMgV0hFUkUgZ3VpbGRJRCA9ICQxO1wiLFxyXG4gICAgICAgIFttc2cuZ3VpbGQuaWRdXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBndWlsZFNldHRpbmdzLnJvd3NbMF0ucHJlZml4ZXM7XHJcbiAgICB9LFxyXG4gICAgYWxsb3dNZW50aW9uOiB0cnVlLFxyXG4gICAgaGFuZGxlRWRpdHM6IHRydWUsXHJcbiAgICBjb21tYW5kVXRpbDogdHJ1ZSxcclxuICAgIGJsb2NrQm90czogdHJ1ZSxcclxuICAgIGJsb2NrQ2xpZW50OiB0cnVlLFxyXG4gICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxyXG4gICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXHJcbiAgICBhcmd1bWVudERlZmF1bHRzOiB7XHJcbiAgICAgIHByb21wdDoge1xyXG4gICAgICAgIG1vZGlmeVN0YXJ0OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIHByb21wdC5gLFxyXG4gICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIHByb21wdC5gLFxyXG4gICAgICAgIHRpbWVvdXQ6IFwiVGhlIGNvbW1hbmQgaGFzIGJlZW4gYXV0b21hdGljYWxseSBjYW5jZWxlZC4uLlwiLFxyXG4gICAgICAgIGVuZGVkOlxyXG4gICAgICAgICAgXCJUaGUgY29tbWFuZCBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNhbmNlbGVkIGR1ZSB0byBleGNlZWRlZCB0cmllcy4uLlwiLFxyXG4gICAgICAgIGNhbmNlbDogXCJjYW5jZWxlZCB0aGUgY29tbWFuZC4uLlwiLFxyXG4gICAgICAgIHRpbWU6IDNlNCxcclxuICAgICAgfSxcclxuICAgICAgb3RoZXJ3aXNlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnMsXHJcbiAgfSk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IEJvdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgb3duZXJJRDogY29uZmlnLm93bmVycyxcclxuICAgICAgaW50ZW50czogbmV3IEludGVudHMoSW50ZW50cy5BTEwpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xyXG4gICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcclxuICAgICAgbGlzdGVuZXJIYW5kbGVyOiB0aGlzLmxpc3RlbmVySGFuZGxlcixcclxuICAgICAgcHJvY2VzcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy50b2tlbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==