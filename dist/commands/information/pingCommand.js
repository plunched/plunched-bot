"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class pingCommand extends discord_akairo_1.Command {
    constructor() {
        super("pingCommand", {
            aliases: ["ping"],
            category: "information",
            description: {
                content: "Check the latency of the bot",
                usage: "ping",
                examples: ["ping"],
            },
            ratelimit: 3,
        });
    }
    exec(message) {
        return message.util.send(`pong! \`${this.client.ws.ping}ms\``);
    }
}
exports.default = pingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvaW5mb3JtYXRpb24vcGluZ0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFHekMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNuQjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUMxQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0Y7QUFqQkQsOEJBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJwaW5nQ29tbWFuZFwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcInBpbmdcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJDaGVjayB0aGUgbGF0ZW5jeSBvZiB0aGUgYm90XCIsXHJcbiAgICAgICAgdXNhZ2U6IFwicGluZ1wiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJwaW5nXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgcG9uZyEgXFxgJHt0aGlzLmNsaWVudC53cy5waW5nfW1zXFxgYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==