"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client",
        });
    }
    exec() {
        console.log(`${this.client.user.tag} is now online and ready`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NsaWVudC9SZWFkeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUEwQztBQUUxQyxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDakQ7UUFDRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLDBCQUEwQixDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGO0FBWkQsZ0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlMaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcInJlYWR5XCIsIHtcclxuICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcclxuICAgICAgZXZlbnQ6IFwicmVhZHlcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY2xpZW50XCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5jbGllbnQudXNlci50YWd9IGlzIG5vdyBvbmxpbmUgYW5kIHJlYWR5YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==