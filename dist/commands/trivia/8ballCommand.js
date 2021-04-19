"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
let replies = [
    "yes, ofc.",
    "no clue.",
    "IDK.",
    "possibly.",
    "clearly not.",
    "yes clearly",
    "definitely not.",
    "why not.",
    "yes but why?",
    "never gonna happen.",
    "hell no.",
];
let number = Math.floor(Math.random() * replies.length);
let answer = ":8ball: " + replies[number];
class _8ballCommand extends discord_akairo_1.Command {
    constructor() {
        super("8ball", {
            aliases: ["8ball", "question"],
            category: "trivia",
            description: {
                content: "answers a question you ask it.",
                usage: "8ball <question>",
                examples: ["8ball am I cool?"],
            },
            ratelimit: 3,
        });
    }
    exec(message) {
        return message.util.reply(`${answer}`);
    }
}
exports.default = _8ballCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGxDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3RyaXZpYS84YmFsbENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFHekMsSUFBSSxPQUFPLEdBQUc7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLE1BQU07SUFDTixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsVUFBVTtDQUNYLENBQUM7QUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUxQyxNQUFxQixhQUFjLFNBQVEsd0JBQU87SUFDaEQ7UUFDRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUM5QixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsUUFBUSxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDL0I7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBaEJELGdDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5sZXQgcmVwbGllcyA9IFtcclxuICBcInllcywgb2ZjLlwiLFxyXG4gIFwibm8gY2x1ZS5cIixcclxuICBcIklESy5cIixcclxuICBcInBvc3NpYmx5LlwiLFxyXG4gIFwiY2xlYXJseSBub3QuXCIsXHJcbiAgXCJ5ZXMgY2xlYXJseVwiLFxyXG4gIFwiZGVmaW5pdGVseSBub3QuXCIsXHJcbiAgXCJ3aHkgbm90LlwiLFxyXG4gIFwieWVzIGJ1dCB3aHk/XCIsXHJcbiAgXCJuZXZlciBnb25uYSBoYXBwZW4uXCIsXHJcbiAgXCJoZWxsIG5vLlwiLFxyXG5dO1xyXG5sZXQgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVwbGllcy5sZW5ndGgpO1xyXG5sZXQgYW5zd2VyID0gXCI6OGJhbGw6IFwiICsgcmVwbGllc1tudW1iZXJdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgXzhiYWxsQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCI4YmFsbFwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcIjhiYWxsXCIsIFwicXVlc3Rpb25cIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcInRyaXZpYVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiYW5zd2VycyBhIHF1ZXN0aW9uIHlvdSBhc2sgaXQuXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiOGJhbGwgPHF1ZXN0aW9uPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCI4YmFsbCBhbSBJIGNvb2w/XCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5yZXBseShgJHthbnN3ZXJ9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==