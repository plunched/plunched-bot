"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const db_1 = require("../../db");
class WorkCommand extends discord_akairo_1.Command {
    constructor() {
        super("work", {
            aliases: ["work"],
            category: "economy",
            description: {
                content: "Gives you money for you to work",
            },
        });
    }
    async exec(message) {
        const randomCoins = Math.floor(Math.random() * 300) + 100;
        await db_1.pool.query("INSERT INTO users (userID) VALUES($1) ON CONFLICT DO NOTHING", [message.author.id]);
        message.util.send("yes");
        let user = await db_1.pool.query("SELECT * FROM users WHERE userID = $1", [
            message.author.id,
        ]);
        user = user.rows[0];
        console.log(user);
        return message.util.send("You worked");
    }
}
exports.default = WorkCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lY29ub215L3dvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMsaUNBQWdDO0FBRWhDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM5QztRQUNFLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxpQ0FBaUM7YUFDM0M7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUN6QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFMUQsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLDhEQUE4RCxFQUM5RCxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQ3BCLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixJQUFJLElBQUksR0FBRyxNQUFNLFNBQUksQ0FBQyxLQUFLLENBQUMsdUNBQXVDLEVBQUU7WUFDbkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUE1QkQsOEJBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuLi8uLi9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwid29ya1wiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcIndvcmtcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImVjb25vbXlcIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkdpdmVzIHlvdSBtb25leSBmb3IgeW91IHRvIHdvcmtcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICBjb25zdCByYW5kb21Db2lucyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAxMDA7XHJcblxyXG4gICAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgXCJJTlNFUlQgSU5UTyB1c2VycyAodXNlcklEKSBWQUxVRVMoJDEpIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcIixcclxuICAgICAgW21lc3NhZ2UuYXV0aG9yLmlkXVxyXG4gICAgKTtcclxuICAgIG1lc3NhZ2UudXRpbC5zZW5kKFwieWVzXCIpO1xyXG5cclxuICAgIGxldCB1c2VyID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcklEID0gJDFcIiwgW1xyXG4gICAgICBtZXNzYWdlLmF1dGhvci5pZCxcclxuICAgIF0pO1xyXG4gICAgdXNlciA9IHVzZXIucm93c1swXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcIllvdSB3b3JrZWRcIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==