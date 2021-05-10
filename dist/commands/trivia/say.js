"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class sayCommand extends discord_akairo_1.Command {
    constructor() {
        super("say", {
            aliases: ["say", "tellMe"],
            category: "trivia",
            description: {
                content: "Says a message you ask it.",
                usage: "8ball <question>",
                examples: ["8ball am I cool?"],
            },
            args: [
                {
                    id: "messageToSay",
                    type: "messageToSay",
                    match: "rest",
                },
            ],
            ratelimit: 3,
        });
    }
    exec(message, { messageToSay }) {
        return message.util.reply(messageToSay);
    }
}
exports.default = sayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3RyaXZpYS9zYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFHekMsTUFBcUIsVUFBVyxTQUFRLHdCQUFPO0lBQzdDO1FBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7WUFDMUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSw0QkFBNEI7Z0JBQ3JDLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQy9CO1lBQ0QsSUFBSSxFQUFFO2dCQUNKO29CQUNFLEVBQUUsRUFBRSxjQUFjO29CQUNsQixJQUFJLEVBQUUsY0FBYztvQkFDcEIsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7YUFDRjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FDVCxPQUFnQixFQUNoQixFQUFFLFlBQVksRUFBNEI7UUFFMUMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUEzQkQsNkJBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNheUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwic2F5XCIsIHtcclxuICAgICAgYWxpYXNlczogW1wic2F5XCIsIFwidGVsbE1lXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJ0cml2aWFcIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIlNheXMgYSBtZXNzYWdlIHlvdSBhc2sgaXQuXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiOGJhbGwgPHF1ZXN0aW9uPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCI4YmFsbCBhbSBJIGNvb2w/XCJdLFxyXG4gICAgICB9LFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwibWVzc2FnZVRvU2F5XCIsXHJcbiAgICAgICAgICB0eXBlOiBcIm1lc3NhZ2VUb1NheVwiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBtZXNzYWdlVG9TYXkgfTogeyBtZXNzYWdlVG9TYXk6IHN0cmluZyB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnJlcGx5KG1lc3NhZ2VUb1NheSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==