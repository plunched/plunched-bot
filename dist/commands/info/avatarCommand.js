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
                    "avatar 531953738491887627",
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
        console.log(member);
        return message.util.send(new discord_js_1.MessageEmbed()
            .setTitle(`Avatar ${member.user.tag}`)
            .setColor("RANDOM")
            .setImage(member.user.displayAvatarURL({ size: size })));
    }
}
exports.default = AvatarCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvL2F2YXRhckNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQTJFO0FBRTNFLE1BQXFCLGFBQWMsU0FBUSx3QkFBTztJQUNoRDtRQUNFLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0NBQWdDO2dCQUN6QyxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixRQUFRLEVBQUU7b0JBQ1IsUUFBUTtvQkFDUixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsMkJBQTJCO2lCQUM1QjthQUNGO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtpQkFDdEM7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBaUIsRUFBRTt3QkFDL0MsSUFDRSxHQUFHOzRCQUNILENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDakIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBRTNELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDO29CQUNELEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF5QztRQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUkseUJBQVksRUFBRTthQUNmLFFBQVEsQ0FBQyxVQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDckMsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUNsQixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFpQixFQUFFLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBdERELGdDQXNEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImF2YXRhclwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcImF2YXRhclwiLCBcImF2XCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJpbmZvXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgY29udGVudDogXCJkaXNwbGF5IHRoZSBhdmF0YXIgb2YgYSBtZW1iZXJcIixcclxuICAgICAgICB1c2FnZTogXCJhdmF0YXIgPG1lbWJlcj4gPHNpemU+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgIFwiYXZhdGFyXCIsXHJcbiAgICAgICAgICBcImF2YXRhciBAdXNlciMwMDAxXCIsXHJcbiAgICAgICAgICBcImF2YXRhciB1c2VyIC1zaXplPTMyXCIsXHJcbiAgICAgICAgICBcImF2YXRhciA1MzE5NTM3Mzg0OTE4ODc2MjdcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJtZW1iZXJcIixcclxuICAgICAgICAgIHR5cGU6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAobXNnOiBNZXNzYWdlKSA9PiBtc2cubWVtYmVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgdHlwZTogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogbnVsbCB8IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBzdHIgfHxcclxuICAgICAgICAgICAgICAoaXNOYU4oTnVtYmVyKHN0cikpICYmXHJcbiAgICAgICAgICAgICAgICBbMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDEwMjQsIDIwNDhdLmluY2x1ZGVzKE51bWJlcihzdHIpKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF0Y2g6IFwib3B0aW9uXCIsXHJcbiAgICAgICAgICBmbGFnOiBbXCItc2l6ZT1cIl0sXHJcbiAgICAgICAgICBkZWZhdWx0OiAyMDQ4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIHsgbWVtYmVyLCBzaXplIH06IHsgbWVtYmVyOiBHdWlsZE1lbWJlcjsgc2l6ZTogbnVtYmVyIH1cclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIGNvbnNvbGUubG9nKG1lbWJlcik7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRUaXRsZShgQXZhdGFyICR7bWVtYmVyLnVzZXIudGFnfWApXHJcbiAgICAgICAgLnNldENvbG9yKFwiUkFORE9NXCIpXHJcbiAgICAgICAgLnNldEltYWdlKG1lbWJlci51c2VyLmRpc3BsYXlBdmF0YXJVUkwoeyBzaXplOiBzaXplIGFzIEltYWdlU2l6ZSB9KSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==