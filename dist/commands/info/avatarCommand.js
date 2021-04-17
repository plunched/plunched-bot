"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class AvatarCommand extends discord_akairo_1.Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar", "av"],
            category: "info",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvL2F2YXRhckNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQTJFO0FBRTNFLE1BQXFCLGFBQWMsU0FBUSx3QkFBTztJQUNoRDtRQUNFLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixRQUFRLEVBQUU7b0JBQ1IsUUFBUTtvQkFDUixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIscUNBQXFDO2lCQUN0QzthQUNGO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtpQkFDdEM7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBaUIsRUFBRTt3QkFDL0MsSUFDRSxHQUFHOzRCQUNILENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDakIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBRTNELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDO29CQUNELEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF5QztRQUV2RCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDZixRQUFRLENBQUMsVUFBVSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3JDLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBaUIsRUFBRSxDQUFDLENBQUMsQ0FDdkUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXJERCxnQ0FxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQsIEltYWdlU2l6ZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJhdmF0YXJcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJhdmF0YXJcIiwgXCJhdlwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiZGlzcGxheSB0aGUgYXZhdGFyIG9mIGEgbWVtYmVyXCIsXHJcbiAgICAgICAgdXNhZ2U6IFwiYXZhdGFyIDxtZW1iZXI+IDxzaXplPlwiLFxyXG4gICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICBcImF2YXRhclwiLFxyXG4gICAgICAgICAgXCJhdmF0YXIgQHVzZXIjMDAwMVwiLFxyXG4gICAgICAgICAgXCJhdmF0YXIgdXNlciAtc2l6ZT0zMlwiLFxyXG4gICAgICAgICAgXCJhdmF0YXIgNTMxOTUzNzM4NDkxODg3NjI3IC1zaXplPTEyOFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgYXJnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IChtc2c6IE1lc3NhZ2UpID0+IG1zZy5tZW1iZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJzaXplXCIsXHJcbiAgICAgICAgICB0eXBlOiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBudWxsIHwgbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHN0ciB8fFxyXG4gICAgICAgICAgICAgIChpc05hTihOdW1iZXIoc3RyKSkgJiZcclxuICAgICAgICAgICAgICAgIFsxNiwgMzIsIDY0LCAxMjgsIDI1NiwgMTAyNCwgMjA0OF0uaW5jbHVkZXMoTnVtYmVyKHN0cikpKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzdHIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtYXRjaDogXCJvcHRpb25cIixcclxuICAgICAgICAgIGZsYWc6IFtcIi1zaXplPVwiXSxcclxuICAgICAgICAgIGRlZmF1bHQ6IDIwNDgsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoXHJcbiAgICBtZXNzYWdlOiBNZXNzYWdlLFxyXG4gICAgeyBtZW1iZXIsIHNpemUgfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyOyBzaXplOiBudW1iZXIgfVxyXG4gICk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKFxyXG4gICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0VGl0bGUoYEF2YXRhciAke21lbWJlci51c2VyLnRhZ31gKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgIC5zZXRJbWFnZShtZW1iZXIudXNlci5kaXNwbGF5QXZhdGFyVVJMKHsgc2l6ZTogc2l6ZSBhcyBJbWFnZVNpemUgfSkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=