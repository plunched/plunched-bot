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
                content: "Answers a question you ask it.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvdHJpdmlhLzhiYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLElBQUksT0FBTyxHQUFHO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixNQUFNO0lBQ04sV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7Q0FDWCxDQUFDO0FBQ0YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELElBQUksTUFBTSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFMUMsTUFBcUIsYUFBYyxTQUFRLHdCQUFPO0lBQ2hEO1FBQ0UsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7WUFDOUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQy9CO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQWdCO1FBQzFCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQWhCRCxnQ0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxubGV0IHJlcGxpZXMgPSBbXHJcbiAgXCJ5ZXMsIG9mYy5cIixcclxuICBcIm5vIGNsdWUuXCIsXHJcbiAgXCJJREsuXCIsXHJcbiAgXCJwb3NzaWJseS5cIixcclxuICBcImNsZWFybHkgbm90LlwiLFxyXG4gIFwieWVzIGNsZWFybHlcIixcclxuICBcImRlZmluaXRlbHkgbm90LlwiLFxyXG4gIFwid2h5IG5vdC5cIixcclxuICBcInllcyBidXQgd2h5P1wiLFxyXG4gIFwibmV2ZXIgZ29ubmEgaGFwcGVuLlwiLFxyXG4gIFwiaGVsbCBuby5cIixcclxuXTtcclxubGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlcGxpZXMubGVuZ3RoKTtcclxubGV0IGFuc3dlciA9IFwiOjhiYWxsOiBcIiArIHJlcGxpZXNbbnVtYmVyXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF84YmFsbENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiOGJhbGxcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCI4YmFsbFwiLCBcInF1ZXN0aW9uXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJ0cml2aWFcIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkFuc3dlcnMgYSBxdWVzdGlvbiB5b3UgYXNrIGl0LlwiLFxyXG4gICAgICAgIHVzYWdlOiBcIjhiYWxsIDxxdWVzdGlvbj5cIixcclxuICAgICAgICBleGFtcGxlczogW1wiOGJhbGwgYW0gSSBjb29sP1wiXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwucmVwbHkoYCR7YW5zd2VyfWApO1xyXG4gIH1cclxufVxyXG4iXX0=