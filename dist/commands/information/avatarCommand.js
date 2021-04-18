"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class AvatarCommand extends discord_akairo_1.Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar", "av"],
            category: "information",
            description: {
                content: "display the avatar of a member",
                usage: "avatar <member> <size>",
                examples: [
                    "avatar",
                    "avatar @user#0001",
                    "avatar user -size=32",
                    "avatar 531953738491887627 -size=128",
                ],
            },
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    default: (msg) => msg.member,
                },
                {
                    id: "size",
                    type: (_, str) => {
                        if (str ||
                            (isNaN(Number(str)) &&
                                [16, 32, 64, 128, 256, 1024, 2048].includes(Number(str))))
                            return Number(str);
                        return null;
                    },
                    match: "option",
                    flag: ["-size="],
                    default: 2048,
                },
            ],
        });
    }
    exec(message, { member, size }) {
        return message.util.send(new discord_js_1.MessageEmbed()
            .setTitle(`Avatar ${member.user.tag}`)
            .setColor("RANDOM")
            .setImage(member.user.displayAvatarURL({ size: size })));
    }
}
exports.default = AvatarCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9hdmF0YXJDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUEyRTtBQUUzRSxNQUFxQixhQUFjLFNBQVEsd0JBQU87SUFDaEQ7UUFDRSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztZQUN6QixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsUUFBUSxFQUFFO29CQUNSLFFBQVE7b0JBQ1IsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLHFDQUFxQztpQkFDdEM7YUFDRjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFO2dCQUNKO29CQUNFLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU07aUJBQ3RDO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQWlCLEVBQUU7d0JBQy9DLElBQ0UsR0FBRzs0QkFDSCxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2pCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUUzRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckIsT0FBTyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztvQkFDRCxLQUFLLEVBQUUsUUFBUTtvQkFDZixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUNULE9BQWdCLEVBQ2hCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBeUM7UUFFdkQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEIsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsUUFBUSxDQUFDLFVBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNyQyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFyREQsZ0NBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBHdWlsZE1lbWJlciwgTWVzc2FnZUVtYmVkLCBJbWFnZVNpemUgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiYXZhdGFyXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiYXZhdGFyXCIsIFwiYXZcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcImluZm9ybWF0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJkaXNwbGF5IHRoZSBhdmF0YXIgb2YgYSBtZW1iZXJcIixcclxuICAgICAgICB1c2FnZTogXCJhdmF0YXIgPG1lbWJlcj4gPHNpemU+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgIFwiYXZhdGFyXCIsXHJcbiAgICAgICAgICBcImF2YXRhciBAdXNlciMwMDAxXCIsXHJcbiAgICAgICAgICBcImF2YXRhciB1c2VyIC1zaXplPTMyXCIsXHJcbiAgICAgICAgICBcImF2YXRhciA1MzE5NTM3Mzg0OTE4ODc2MjcgLXNpemU9MTI4XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICB0eXBlOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogKG1zZzogTWVzc2FnZSkgPT4gbXNnLm1lbWJlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcInNpemVcIixcclxuICAgICAgICAgIHR5cGU6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IG51bGwgfCBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgc3RyIHx8XHJcbiAgICAgICAgICAgICAgKGlzTmFOKE51bWJlcihzdHIpKSAmJlxyXG4gICAgICAgICAgICAgICAgWzE2LCAzMiwgNjQsIDEyOCwgMjU2LCAxMDI0LCAyMDQ4XS5pbmNsdWRlcyhOdW1iZXIoc3RyKSkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHN0cik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1hdGNoOiBcIm9wdGlvblwiLFxyXG4gICAgICAgICAgZmxhZzogW1wiLXNpemU9XCJdLFxyXG4gICAgICAgICAgZGVmYXVsdDogMjA0OCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IG1lbWJlciwgc2l6ZSB9OiB7IG1lbWJlcjogR3VpbGRNZW1iZXI7IHNpemU6IG51bWJlciB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRUaXRsZShgQXZhdGFyICR7bWVtYmVyLnVzZXIudGFnfWApXHJcbiAgICAgICAgLnNldENvbG9yKFwiUkFORE9NXCIpXHJcbiAgICAgICAgLnNldEltYWdlKG1lbWJlci51c2VyLmRpc3BsYXlBdmF0YXJVUkwoeyBzaXplOiBzaXplIGFzIEltYWdlU2l6ZSB9KSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==