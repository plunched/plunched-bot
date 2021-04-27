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
                let guildSettings = await db_1.pool.query("SELECT prefixes FROM guilds WHERE guildID = $1;", [msg.guild.id]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBK0U7QUFFL0UsK0JBQTRCO0FBQzVCLHNDQUEyRDtBQUMzRCwyQ0FBcUM7QUFDckMsOEJBQTZCO0FBZ0I3QixNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUE2Q2pELFlBQW1CLE1BQWtCO1FBQ25DLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsSUFBSSxvQkFBTyxDQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQS9DRSxXQUFNLEdBQUcsZUFBTSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxlQUFNLENBQUM7UUFDaEIsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNsRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQzlDLENBQUMsQ0FBQztRQUNJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBOEIsRUFBRTtnQkFDaEQsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLGdIQUFnSCxFQUNoSCxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGVBQU0sRUFBRSxDQUFDLENBQUMsQ0FDMUMsQ0FBQztnQkFFRixJQUFJLGFBQWEsR0FBRyxNQUFNLFNBQUksQ0FBQyxLQUFLLENBQ2xDLGlEQUFpRCxFQUNqRCxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ2YsQ0FBQztnQkFDRixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hDLENBQUM7WUFDRCxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLHlDQUF5QztvQkFDakQsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQy9DLEdBQUcsR0FBRyx5Q0FBeUM7b0JBQ2pELE9BQU8sRUFBRSxnREFBZ0Q7b0JBQ3pELEtBQUssRUFDSCxzRUFBc0U7b0JBQ3hFLE1BQU0sRUFBRSx5QkFBeUI7b0JBQ2pDLElBQUksRUFBRSxHQUFHO2lCQUNWO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzFCLENBQUMsQ0FBQztRQVFELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQXRFRCw0QkFzRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycywgY29sb3JzLCBlbW90ZXMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEludGVudHMgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4uL2RiXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCIge1xyXG4gIGludGVyZmFjZSBBa2Fpcm9DbGllbnQge1xyXG4gICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xyXG4gICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgICBjb2xvcnM6IHR5cGVvZiBjb2xvcnM7XHJcbiAgICBlbW90ZXM6IHR5cGVvZiBlbW90ZXM7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQm90T3B0aW9ucyB7XHJcbiAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgb3duZXJzPzogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdENsaWVudCBleHRlbmRzIEFrYWlyb0NsaWVudCB7XHJcbiAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcclxuICBwdWJsaWMgY29sb3JzID0gY29sb3JzO1xyXG4gIHB1YmxpYyBlbW90ZXMgPSBlbW90ZXM7XHJcbiAgcHVibGljIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyID0gbmV3IExpc3RlbmVySGFuZGxlcih0aGlzLCB7XHJcbiAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwibGlzdGVuZXJzXCIpLFxyXG4gIH0pO1xyXG4gIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xyXG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxyXG4gICAgcHJlZml4OiBhc3luYyAobXNnKTogUHJvbWlzZTxzdHJpbmcgfCBzdHJpbmdbXT4gPT4ge1xyXG4gICAgICBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICAgIFwiSU5TRVJUIElOVE8gZ3VpbGRzIChndWlsZElELCBndWlsZE5hbWUsIHByZWZpeGVzLCB0b3RhbENvbW1hbmRzKSBWQUxVRVMoJDEsICQyLCAkMywgJDQpIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcIixcclxuICAgICAgICBbbXNnLmd1aWxkLmlkLCBtc2cuZ3VpbGQubmFtZSwgcHJlZml4LCAwXVxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IGd1aWxkU2V0dGluZ3MgPSBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICAgIFwiU0VMRUNUIHByZWZpeGVzIEZST00gZ3VpbGRzIFdIRVJFIGd1aWxkSUQgPSAkMTtcIixcclxuICAgICAgICBbbXNnLmd1aWxkLmlkXVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZ3VpbGRTZXR0aW5ncy5yb3dzWzBdLnByZWZpeGVzO1xyXG4gICAgfSxcclxuICAgIGFsbG93TWVudGlvbjogdHJ1ZSxcclxuICAgIGhhbmRsZUVkaXRzOiB0cnVlLFxyXG4gICAgY29tbWFuZFV0aWw6IHRydWUsXHJcbiAgICBibG9ja0JvdHM6IHRydWUsXHJcbiAgICBibG9ja0NsaWVudDogdHJ1ZSxcclxuICAgIGNvbW1hbmRVdGlsTGlmZXRpbWU6IDNlNSxcclxuICAgIGRlZmF1bHRDb29sZG93bjogNmU0LFxyXG4gICAgYXJndW1lbnREZWZhdWx0czoge1xyXG4gICAgICBwcm9tcHQ6IHtcclxuICAgICAgICBtb2RpZnlTdGFydDogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+XHJcbiAgICAgICAgICBgJHtzdHJ9XFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBwcm9tcHQuYCxcclxuICAgICAgICBtb2RpZnlSZXRyeTogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+XHJcbiAgICAgICAgICBgJHtzdHJ9XFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBwcm9tcHQuYCxcclxuICAgICAgICB0aW1lb3V0OiBcIlRoZSBjb21tYW5kIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2FuY2VsZWQuLi5cIixcclxuICAgICAgICBlbmRlZDpcclxuICAgICAgICAgIFwiVGhlIGNvbW1hbmQgaGFzIGJlZW4gYXV0b21hdGljYWxseSBjYW5jZWxlZCBkdWUgdG8gZXhjZWVkZWQgdHJpZXMuLi5cIixcclxuICAgICAgICBjYW5jZWw6IFwiY2FuY2VsZWQgdGhlIGNvbW1hbmQuLi5cIixcclxuICAgICAgICB0aW1lOiAzZTQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG90aGVyd2lzZTogXCJcIixcclxuICAgIH0sXHJcbiAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzLFxyXG4gIH0pO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBCb3RPcHRpb25zKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIG93bmVySUQ6IGNvbmZpZy5vd25lcnMsXHJcbiAgICAgIGludGVudHM6IG5ldyBJbnRlbnRzKEludGVudHMuQUxMKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBfaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIudXNlTGlzdGVuZXJIYW5kbGVyKHRoaXMubGlzdGVuZXJIYW5kbGVyKTtcclxuICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcclxuICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXHJcbiAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXHJcbiAgICAgIHByb2Nlc3MsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLmxvYWRBbGwoKTtcclxuICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgYXdhaXQgdGhpcy5faW5pdCgpO1xyXG4gICAgcmV0dXJuIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xyXG4gIH1cclxufVxyXG4iXX0=