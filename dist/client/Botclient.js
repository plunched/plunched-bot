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
                await db_1.pool.query("INSERT INTO guilds (guildID, guildName, prefixes, totalCommands) VALUES($1, $2, $3, $4) ON CONFLICT DO NOTHING RETURNING *", [msg.guild.id, msg.guild.name, config_1.prefix, 0]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUEyRDtBQUMzRCwyQ0FBcUM7QUFDckMsOEJBQTZCO0FBZ0I3QixNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUE2Q2pELFlBQW1CLE1BQWtCO1FBQ25DLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsSUFBSSxvQkFBTyxDQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQS9DRSxXQUFNLEdBQUcsZUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxlQUFNLENBQUM7UUFDaEIsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNsRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBOEIsRUFBRTtnQkFDaEQsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLDRIQUE0SCxFQUM1SCxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGVBQU0sRUFBRSxDQUFDLENBQUMsQ0FDMUMsQ0FBQztnQkFFRixJQUFJLGFBQWEsR0FBRyxNQUFNLFNBQUksQ0FBQyxLQUFLLENBQ2xDLDBDQUEwQyxFQUMxQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ2YsQ0FBQztnQkFDRixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hDLENBQUM7WUFDRCxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLHlDQUF5QztvQkFDakQsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQy9DLEdBQUcsR0FBRyx5Q0FBeUM7b0JBQ2pELE9BQU8sRUFBRSxnREFBZ0Q7b0JBQ3pELEtBQUssRUFDSCxzRUFBc0U7b0JBQ3hFLE1BQU0sRUFBRSx5QkFBeUI7b0JBQ2pDLElBQUksRUFBRSxHQUFHO2lCQUNWO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzFCLENBQUMsQ0FBQztRQVFELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQXRFRCw0QkFzRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycywgY29sb3JzLCBlbW90ZXMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEludGVudHMgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uL2RiXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCIge1xyXG4gIGludGVyZmFjZSBBa2Fpcm9DbGllbnQge1xyXG4gICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xyXG4gICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgICBjb2xvcnM6IHR5cGVvZiBjb2xvcnM7XHJcbiAgICBlbW90ZXM6IHR5cGVvZiBlbW90ZXM7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm90T3B0aW9ucyB7XHJcbiAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgb3duZXJzPzogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdENsaWVudCBleHRlbmRzIEFrYWlyb0NsaWVudCB7XHJcbiAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcclxuICBwdWJsaWMgY29sb3JzID0gY29sb3JzO1xyXG4gIHB1YmxpYyBlbW90ZXMgPSBlbW90ZXM7XHJcbiAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XHJcbiAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwibGlzdGVuZXJzXCIpLFxyXG4gIH0pO1xyXG4gIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xyXG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxyXG4gICAgcHJlZml4OiBhc3luYyAobXNnKTogUHJvbWlzZTxzdHJpbmcgfCBzdHJpbmdbXT4gPT4ge1xyXG4gICAgICBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICAgIFwiSU5TRVJUIElOVE8gZ3VpbGRzIChndWlsZElELCBndWlsZE5hbWUsIHByZWZpeGVzLCB0b3RhbENvbW1hbmRzKSBWQUxVRVMoJDEsICQyLCAkMywgJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkcgUkVUVVJOSU5HICpcIixcclxuICAgICAgICBbbXNnLmd1aWxkLmlkLCBtc2cuZ3VpbGQubmFtZSwgcHJlZml4LCAwXVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGd1aWxkU2V0dGluZ3MgPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICAgIFwiU0VMRUNUICogRlJPTSBndWlsZHMgV0hFUkUgZ3VpbGRJRCA9ICQxO1wiLFxyXG4gICAgICAgIFttc2cuZ3VpbGQuaWRdXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBndWlsZFNldHRpbmdzLnJvd3NbMF0ucHJlZml4ZXM7XHJcbiAgICB9LFxyXG4gICAgYWxsb3dNZW50aW9uOiB0cnVlLFxyXG4gICAgaGFuZGxlRWRpdHM6IHRydWUsXHJcbiAgICBjb21tYW5kVXRpbDogdHJ1ZSxcclxuICAgIGJsb2NrQm90czogdHJ1ZSxcclxuICAgIGJsb2NrQ2xpZW50OiB0cnVlLFxyXG4gICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxyXG4gICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXHJcbiAgICBhcmd1bWVudERlZmF1bHRzOiB7XHJcbiAgICAgIHByb21wdDoge1xyXG4gICAgICAgIG1vZGlmeVN0YXJ0OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIHByb21wdC5gLFxyXG4gICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIHByb21wdC5gLFxyXG4gICAgICAgIHRpbWVvdXQ6IFwiVGhlIGNvbW1hbmQgaGFzIGJlZW4gYXV0b21hdGljYWxseSBjYW5jZWxlZC4uLlwiLFxyXG4gICAgICAgIGVuZGVkOlxyXG4gICAgICAgICAgXCJUaGUgY29tbWFuZCBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNhbmNlbGVkIGR1ZSB0byBleGNlZWRlZCB0cmllcy4uLlwiLFxyXG4gICAgICAgIGNhbmNlbDogXCJjYW5jZWxlZCB0aGUgY29tbWFuZC4uLlwiLFxyXG4gICAgICAgIHRpbWU6IDNlNCxcclxuICAgICAgfSxcclxuICAgICAgb3RoZXJ3aXNlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnMsXHJcbiAgfSk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IEJvdE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgb3duZXJJRDogY29uZmlnLm93bmVycyxcclxuICAgICAgaW50ZW50czogbmV3IEludGVudHMoSW50ZW50cy5BTEwpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xyXG4gICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcclxuICAgICAgbGlzdGVuZXJIYW5kbGVyOiB0aGlzLmxpc3RlbmVySGFuZGxlcixcclxuICAgICAgcHJvY2VzcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBhd2FpdCB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy50b2tlbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==