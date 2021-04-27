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
            category: "trivia",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90cml2aWEvbWVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUF5QztBQUN6QywyQ0FBbUQ7QUFDbkQsNERBQStCO0FBRS9CLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM5QztRQUNFLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1lBQzFCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQ2pDO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFdBQVc7b0JBQ2YsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUNULE9BQWdCLEVBQ2hCLEVBQUUsU0FBUyxFQUF5QjtRQUVwQyxJQUFJLFNBQVMsRUFBRTtZQUNiLG9CQUFLLENBQ0gsd0NBQXdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQ3JFO2lCQUNFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNuQixJQUFJLFNBQVMsR0FBRyxJQUFJLHlCQUFZLEVBQUU7cUJBQy9CLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQ2xCLGNBQWMsQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztxQkFDOUMsU0FBUyxDQUFDLGdDQUFnQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFFekQsSUFBSSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ2IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxTQUFTLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsT0FBTztTQUNSO1FBQ0QsT0FBTyxvQkFBSyxDQUFDLHNDQUFzQyxDQUFDO2FBQ2pELElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDbkIsTUFBTSxTQUFTLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2lCQUNqQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNsQixjQUFjLENBQUMsWUFBWSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7aUJBQzlDLFNBQVMsQ0FBQyxnQ0FBZ0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFekQsSUFBSSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0Y7QUF6REQsOEJBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1lbWVDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcIm1lbWVcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJtZW1lXCIsIFwibWVtZXlcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcInRyaXZpYVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiSGVscHMgeW91IG91dCB3aXRoIGFueSBjb21tYW5kXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiaGVscCA8Y29tbWFuZD5cIixcclxuICAgICAgICBleGFtcGxlczogW1wibGlua3NcIiwgXCJoZWxwIHBpbmdcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcInN1YlJlZGRpdFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJzdWJSZWRkaXRcIixcclxuICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IHN1YlJlZGRpdCB9OiB7IHN1YlJlZGRpdDogc3RyaW5nIH1cclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIGlmIChzdWJSZWRkaXQpIHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vbWVtZS1hcGkuaGVyb2t1YXBwLmNvbS9naW1tZS8ke3N1YlJlZGRpdC5yZXBsYWNlKFwiIFwiLCBcIlwiKX1gXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChqc29uKSA9PiB7XHJcbiAgICAgICAgICBsZXQgbWVtZUVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgIC5zZXRUaXRsZShgJHtqc29uLnRpdGxlfWApXHJcbiAgICAgICAgICAgIC5zZXRJbWFnZShqc29uLnVybClcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAqKltsaW5rXSgke2pzb24ucG9zdExpbmt9KSoqYClcclxuICAgICAgICAgICAgLnNldEZvb3RlcihgPDp1cFZvdGU6ODI5NzI3MzgwMTEzMTk1MDI5PiAke2pzb24udXBzfWApO1xyXG5cclxuICAgICAgICAgIGxldCBtc2cgPSBhd2FpdCBtZXNzYWdlLmNoYW5uZWwuc2VuZChgTG9hZGluZyBhIG1lbWUuLi5gKTtcclxuICAgICAgICAgIGlmICghanNvbi50aXRsZSlcclxuICAgICAgICAgICAgcmV0dXJuIG1zZy5lZGl0KGBDb3VsZG4ndCBmaW5kIHRoZSBzdWJyZWRkaXQgXFxgJHtzdWJSZWRkaXR9XFxgYCk7XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQobWVtZUVtYmVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9tZW1lLWFwaS5oZXJva3VhcHAuY29tL2dpbW1lXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGFzeW5jIChqc29uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVtZUVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAuc2V0VGl0bGUoYCR7anNvbi50aXRsZX1gKVxyXG4gICAgICAgICAgLnNldEltYWdlKGpzb24udXJsKVxyXG4gICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAqKltsaW5rXSgke2pzb24ucG9zdExpbmt9KSoqYClcclxuICAgICAgICAgIC5zZXRGb290ZXIoYDw6dXBWb3RlOjgyOTcyNzM4MDExMzE5NTAyOT4gJHtqc29uLnVwc31gKTtcclxuXHJcbiAgICAgICAgbGV0IG1zZyA9IGF3YWl0IG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGBMb2FkaW5nIGEgbWVtZS4uLmApO1xyXG4gICAgICAgIG1zZy5lZGl0KG1lbWVFbWJlZCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=