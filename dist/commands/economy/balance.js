"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const db_1 = require("../../db");
class balanceCommand extends discord_akairo_1.Command {
    constructor() {
        super("balance", {
            aliases: ["balance", "bal"],
            category: "economy",
            description: {
                content: "Tells you how much money you have",
                usage: "balance <user>",
                examples: ["bal", "bal @user#0001", "balance userID"],
            },
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    default: (msg) => msg.member,
                },
            ],
        });
    }
    async exec(message, { member }) {
        await db_1.pool.query("INSERT INTO users (userID, job) VALUES($1, $2) ON CONFLICT DO NOTHING", [member.id, "garbage-collector"]);
        let user = await db_1.pool.query("SELECT * FROM users WHERE userID = $1", [
            member.id,
        ]);
        return message.util.send(new discord_js_1.MessageEmbed()
            .setTitle(`${member.user.username}'s balance`)
            .setDescription(`**cash:** ${this.client.emotes.coin}${user.rows[0].cash}
    **bank**: ${this.client.emotes.coin}${user.rows[0].bank}`)
            .setColor(this.client.colors.default)
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL())
            .setColor(this.client.colors.default));
    }
}
exports.default = balanceCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFsYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9lY29ub215L2JhbGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQWdFO0FBQ2hFLGlDQUFnQztBQUVoQyxNQUFxQixjQUFlLFNBQVEsd0JBQU87SUFDakQ7UUFDRSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUMzQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLG1DQUFtQztnQkFDNUMsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2FBQ3REO1lBQ0QsSUFBSSxFQUFFO2dCQUNKO29CQUNFLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU07aUJBQ3RDO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FDZixPQUFnQixFQUNoQixFQUFFLE1BQU0sRUFBMkI7UUFFbkMsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUNkLHVFQUF1RSxFQUN2RSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FDakMsQ0FBQztRQUVGLElBQUksSUFBSSxHQUFHLE1BQU0sU0FBSSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRTtZQUNuRSxNQUFNLENBQUMsRUFBRTtTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUkseUJBQVksRUFBRTthQUNmLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxZQUFZLENBQUM7YUFDN0MsY0FBYyxDQUNiLGFBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQ3BEO2FBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDcEUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUN4QyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBL0NELGlDQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkLCBHdWlsZE1lbWJlciB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHBvb2wgfSBmcm9tIFwiLi4vLi4vZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhbGFuY2VDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImJhbGFuY2VcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJiYWxhbmNlXCIsIFwiYmFsXCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJlY29ub215XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJUZWxscyB5b3UgaG93IG11Y2ggbW9uZXkgeW91IGhhdmVcIixcclxuICAgICAgICB1c2FnZTogXCJiYWxhbmNlIDx1c2VyPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXCJiYWxcIiwgXCJiYWwgQHVzZXIjMDAwMVwiLCBcImJhbGFuY2UgdXNlcklEXCJdLFxyXG4gICAgICB9LFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICB0eXBlOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogKG1zZzogTWVzc2FnZSkgPT4gbXNnLm1lbWJlcixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IG1lbWJlciB9OiB7IG1lbWJlcjogR3VpbGRNZW1iZXIgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgXCJJTlNFUlQgSU5UTyB1c2VycyAodXNlcklELCBqb2IpIFZBTFVFUygkMSwgJDIpIE9OIENPTkZMSUNUIERPIE5PVEhJTkdcIixcclxuICAgICAgW21lbWJlci5pZCwgXCJnYXJiYWdlLWNvbGxlY3RvclwiXVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IHBvb2wucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIHVzZXJJRCA9ICQxXCIsIFtcclxuICAgICAgbWVtYmVyLmlkLFxyXG4gICAgXSk7XHJcblxyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0VGl0bGUoYCR7bWVtYmVyLnVzZXIudXNlcm5hbWV9J3MgYmFsYW5jZWApXHJcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKFxyXG4gICAgICAgICAgYCoqY2FzaDoqKiAke3RoaXMuY2xpZW50LmVtb3Rlcy5jb2lufSR7dXNlci5yb3dzWzBdLmNhc2h9XHJcbiAgICAqKmJhbmsqKjogJHt0aGlzLmNsaWVudC5lbW90ZXMuY29pbn0ke3VzZXIucm93c1swXS5iYW5rfWBcclxuICAgICAgICApXHJcbiAgICAgICAgLnNldENvbG9yKHRoaXMuY2xpZW50LmNvbG9ycy5kZWZhdWx0KVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==