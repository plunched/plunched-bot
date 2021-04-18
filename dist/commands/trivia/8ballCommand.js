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
        return message.reply(`${answer}`);
    }
}
exports.default = _8ballCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGxDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3RyaXZpYS84YmFsbENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFHekMsSUFBSSxPQUFPLEdBQUc7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLE1BQU07SUFDTixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsVUFBVTtDQUNYLENBQUM7QUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEQsSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUxQyxNQUFxQixhQUFjLFNBQVEsd0JBQU87SUFDaEQ7UUFDRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUM5QixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsUUFBUSxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDL0I7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFoQkQsZ0NBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmxldCByZXBsaWVzID0gW1xyXG4gIFwieWVzLCBvZmMuXCIsXHJcbiAgXCJubyBjbHVlLlwiLFxyXG4gIFwiSURLLlwiLFxyXG4gIFwicG9zc2libHkuXCIsXHJcbiAgXCJjbGVhcmx5IG5vdC5cIixcclxuICBcInllcyBjbGVhcmx5XCIsXHJcbiAgXCJkZWZpbml0ZWx5IG5vdC5cIixcclxuICBcIndoeSBub3QuXCIsXHJcbiAgXCJ5ZXMgYnV0IHdoeT9cIixcclxuICBcIm5ldmVyIGdvbm5hIGhhcHBlbi5cIixcclxuICBcImhlbGwgbm8uXCIsXHJcbl07XHJcbmxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXBsaWVzLmxlbmd0aCk7XHJcbmxldCBhbnN3ZXIgPSBcIjo4YmFsbDogXCIgKyByZXBsaWVzW251bWJlcl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfOGJhbGxDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcIjhiYWxsXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiOGJhbGxcIiwgXCJxdWVzdGlvblwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwidHJpdmlhXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJhbnN3ZXJzIGEgcXVlc3Rpb24geW91IGFzayBpdC5cIixcclxuICAgICAgICB1c2FnZTogXCI4YmFsbCA8cXVlc3Rpb24+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcIjhiYWxsIGFtIEkgY29vbD9cIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgIH0pO1xyXG4gIH1cclxuICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS5yZXBseShgJHthbnN3ZXJ9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==