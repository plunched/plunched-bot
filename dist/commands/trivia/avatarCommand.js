"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class AvatarCommand extends discord_akairo_1.Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar", "av"],
            category: "trivia",
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
            .setColor(this.client.colors.default)
            .setTitle(`Avatar ${member.user.tag}`)
            .setColor(this.client.colors.default)
            .setImage(member.user.displayAvatarURL({ size: size }))
            .setTimestamp()
            .setFooter(this.client.user.tag, this.client.user.displayAvatarURL()));
    }
}
exports.default = AvatarCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90cml2aWEvYXZhdGFyQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBMkU7QUFFM0UsTUFBcUIsYUFBYyxTQUFRLHdCQUFPO0lBQ2hEO1FBQ0UsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7WUFDekIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLFFBQVEsRUFBRTtvQkFDUixRQUFRO29CQUNSLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixxQ0FBcUM7aUJBQ3RDO2FBQ0Y7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDSjtvQkFDRSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2lCQUN0QztnQkFDRDtvQkFDRSxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFpQixFQUFFO3dCQUMvQyxJQUNFLEdBQUc7NEJBQ0gsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFFM0QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUM7b0JBQ0QsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNoQixPQUFPLEVBQUUsSUFBSTtpQkFDZDthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FDVCxPQUFnQixFQUNoQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQXlDO1FBRXZELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUkseUJBQVksRUFBRTthQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDcEMsUUFBUSxDQUFDLFVBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQWlCLEVBQUUsQ0FBQyxDQUFDO2FBQ25FLFlBQVksRUFBRTthQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUN4RSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBeERELGdDQXdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiYXZhdGFyXCIsIHtcclxuICAgICAgYWxpYXNlczogW1wiYXZhdGFyXCIsIFwiYXZcIl0sXHJcbiAgICAgIGNhdGVnb3J5OiBcInRyaXZpYVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiZGlzcGxheSB0aGUgYXZhdGFyIG9mIGEgbWVtYmVyXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiYXZhdGFyIDxtZW1iZXI+IDxzaXplPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICBcImF2YXRhclwiLFxyXG4gICAgICAgICAgXCJhdmF0YXIgQHVzZXIjMDAwMVwiLFxyXG4gICAgICAgICAgXCJhdmF0YXIgdXNlciAtc2l6ZT0zMlwiLFxyXG4gICAgICAgICAgXCJhdmF0YXIgNTMxOTUzNzM4NDkxODg3NjI3IC1zaXplPTEyOFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IChtc2c6IE1lc3NhZ2UpID0+IG1zZy5tZW1iZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJzaXplXCIsXHJcbiAgICAgICAgICB0eXBlOiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBudWxsIHwgbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHN0ciB8fFxyXG4gICAgICAgICAgICAgIChpc05hTihOdW1iZXIoc3RyKSkgJiZcclxuICAgICAgICAgICAgICAgIFsxNiwgMzIsIDY0LCAxMjgsIDI1NiwgMTAyNCwgMjA0OF0uaW5jbHVkZXMoTnVtYmVyKHN0cikpKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzdHIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtYXRjaDogXCJvcHRpb25cIixcclxuICAgICAgICAgIGZsYWc6IFtcIi1zaXplPVwiXSxcclxuICAgICAgICAgIGRlZmF1bHQ6IDIwNDgsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBtZW1iZXIsIHNpemUgfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyOyBzaXplOiBudW1iZXIgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgLnNldFRpdGxlKGBBdmF0YXIgJHttZW1iZXIudXNlci50YWd9YClcclxuICAgICAgICAuc2V0Q29sb3IodGhpcy5jbGllbnQuY29sb3JzLmRlZmF1bHQpXHJcbiAgICAgICAgLnNldEltYWdlKG1lbWJlci51c2VyLmRpc3BsYXlBdmF0YXJVUkwoeyBzaXplOiBzaXplIGFzIEltYWdlU2l6ZSB9KSlcclxuICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuICAgICAgICAuc2V0Rm9vdGVyKHRoaXMuY2xpZW50LnVzZXIudGFnLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==