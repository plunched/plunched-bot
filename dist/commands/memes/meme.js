"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const node_fetch_1 = __importDefault(require("node-fetch"));
class memeCommand extends discord_akairo_1.Command {
    constructor() {
        super("meme", {
            aliases: ["meme", "memey"],
            category: "memes",
            description: {
                content: "Helps you out with any command",
                usage: "help <command>",
                examples: ["links", "help ping"],
            },
            ratelimit: 3,
            args: [
                {
                    id: "subReddit",
                    type: "subReddit",
                    match: "rest",
                },
            ],
        });
    }
    exec(message, { subReddit }) {
        if (subReddit) {
            node_fetch_1.default(`https://meme-api.herokuapp.com/gimme/${subReddit.replace(" ", "")}`)
                .then((res) => res.json())
                .then(async (json) => {
                let memeEmbed = new discord_js_1.MessageEmbed()
                    .setTitle(`${json.title}`)
                    .setImage(json.url)
                    .setDescription(`**[link](${json.postLink})**`)
                    .setFooter(`<:upVote:829727380113195029> ${json.ups}`);
                let msg = await message.channel.send(`Loading a meme...`);
                if (!json.title)
                    return msg.edit(`Couldn't find the subreddit \`${subReddit}\``);
                return message.util.send(memeEmbed);
            });
            return;
        }
        return node_fetch_1.default("https://meme-api.herokuapp.com/gimme")
            .then((res) => res.json())
            .then(async (json) => {
            const memeEmbed = new discord_js_1.MessageEmbed()
                .setTitle(`${json.title}`)
                .setImage(json.url)
                .setDescription(`**[link](${json.postLink})**`)
                .setFooter(`<:upVote:829727380113195029> ${json.ups}`);
            let msg = await message.channel.send(`Loading a meme...`);
            msg.edit(memeEmbed);
        });
    }
}
exports.default = memeCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9tZW1lcy9tZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCw0REFBK0I7QUFFL0IsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7WUFDMUIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7YUFDakM7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsV0FBVztvQkFDZixJQUFJLEVBQUUsV0FBVztvQkFDakIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxTQUFTLEVBQXlCO1FBRXBDLElBQUksU0FBUyxFQUFFO1lBQ2Isb0JBQUssQ0FDSCx3Q0FBd0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FDckU7aUJBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ25CLElBQUksU0FBUyxHQUFHLElBQUkseUJBQVksRUFBRTtxQkFDL0IsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztxQkFDbEIsY0FBYyxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDO3FCQUM5QyxTQUFTLENBQUMsZ0NBQWdDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUV6RCxJQUFJLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztvQkFDYixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLFNBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFDTCxPQUFPO1NBQ1I7UUFDRCxPQUFPLG9CQUFLLENBQUMsc0NBQXNDLENBQUM7YUFDakQsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNuQixNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUFZLEVBQUU7aUJBQ2pDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ2xCLGNBQWMsQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztpQkFDOUMsU0FBUyxDQUFDLGdDQUFnQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUV6RCxJQUFJLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRjtBQXpERCw4QkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWVtZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwibWVtZVwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcIm1lbWVcIiwgXCJtZW1leVwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwibWVtZXNcIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkhlbHBzIHlvdSBvdXQgd2l0aCBhbnkgY29tbWFuZFwiLFxyXG4gICAgICAgIHVzYWdlOiBcImhlbHAgPGNvbW1hbmQ+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcImxpbmtzXCIsIFwiaGVscCBwaW5nXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJzdWJSZWRkaXRcIixcclxuICAgICAgICAgIHR5cGU6IFwic3ViUmVkZGl0XCIsXHJcbiAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBzdWJSZWRkaXQgfTogeyBzdWJSZWRkaXQ6IHN0cmluZyB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBpZiAoc3ViUmVkZGl0KSB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL21lbWUtYXBpLmhlcm9rdWFwcC5jb20vZ2ltbWUvJHtzdWJSZWRkaXQucmVwbGFjZShcIiBcIiwgXCJcIil9YFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihhc3luYyAoanNvbikgPT4ge1xyXG4gICAgICAgICAgbGV0IG1lbWVFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0VGl0bGUoYCR7anNvbi50aXRsZX1gKVxyXG4gICAgICAgICAgICAuc2V0SW1hZ2UoanNvbi51cmwpXHJcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgKipbbGlua10oJHtqc29uLnBvc3RMaW5rfSkqKmApXHJcbiAgICAgICAgICAgIC5zZXRGb290ZXIoYDw6dXBWb3RlOjgyOTcyNzM4MDExMzE5NTAyOT4gJHtqc29uLnVwc31gKTtcclxuXHJcbiAgICAgICAgICBsZXQgbXNnID0gYXdhaXQgbWVzc2FnZS5jaGFubmVsLnNlbmQoYExvYWRpbmcgYSBtZW1lLi4uYCk7XHJcbiAgICAgICAgICBpZiAoIWpzb24udGl0bGUpXHJcbiAgICAgICAgICAgIHJldHVybiBtc2cuZWRpdChgQ291bGRuJ3QgZmluZCB0aGUgc3VicmVkZGl0IFxcYCR7c3ViUmVkZGl0fVxcYGApO1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKG1lbWVFbWJlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vbWVtZS1hcGkuaGVyb2t1YXBwLmNvbS9naW1tZVwiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihhc3luYyAoanNvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbWVFbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgLnNldFRpdGxlKGAke2pzb24udGl0bGV9YClcclxuICAgICAgICAgIC5zZXRJbWFnZShqc29uLnVybClcclxuICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgKipbbGlua10oJHtqc29uLnBvc3RMaW5rfSkqKmApXHJcbiAgICAgICAgICAuc2V0Rm9vdGVyKGA8OnVwVm90ZTo4Mjk3MjczODAxMTMxOTUwMjk+ICR7anNvbi51cHN9YCk7XHJcblxyXG4gICAgICAgIGxldCBtc2cgPSBhd2FpdCBtZXNzYWdlLmNoYW5uZWwuc2VuZChgTG9hZGluZyBhIG1lbWUuLi5gKTtcclxuICAgICAgICBtc2cuZWRpdChtZW1lRW1iZWQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19