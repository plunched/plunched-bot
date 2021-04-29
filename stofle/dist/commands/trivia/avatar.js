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
                content: "Display the avatar of a member.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3RyaXZpYS9hdmF0YXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQTJFO0FBRTNFLE1BQXFCLGFBQWMsU0FBUSx3QkFBTztJQUNoRDtRQUNFLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsaUNBQWlDO2dCQUMxQyxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixRQUFRLEVBQUU7b0JBQ1IsUUFBUTtvQkFDUixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIscUNBQXFDO2lCQUN0QzthQUNGO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtpQkFDdEM7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBaUIsRUFBRTt3QkFDL0MsSUFDRSxHQUFHOzRCQUNILENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDakIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBRTNELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixPQUFPLElBQUksQ0FBQztvQkFDZCxDQUFDO29CQUNELEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQ1QsT0FBZ0IsRUFDaEIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF5QztRQUV2RCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QixJQUFJLHlCQUFZLEVBQUU7YUFDZixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3BDLFFBQVEsQ0FBQyxVQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNwQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFpQixFQUFFLENBQUMsQ0FBQzthQUNuRSxZQUFZLEVBQUU7YUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXhERCxnQ0F3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQsIEltYWdlU2l6ZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImF2YXRhclwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcImF2YXRhclwiLCBcImF2XCJdLFxyXG4gICAgICBjYXRlZ29yeTogXCJ0cml2aWFcIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcIkRpc3BsYXkgdGhlIGF2YXRhciBvZiBhIG1lbWJlci5cIixcclxuICAgICAgICB1c2FnZTogXCJhdmF0YXIgPG1lbWJlcj4gPHNpemU+XCIsXHJcbiAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgIFwiYXZhdGFyXCIsXHJcbiAgICAgICAgICBcImF2YXRhciBAdXNlciMwMDAxXCIsXHJcbiAgICAgICAgICBcImF2YXRhciB1c2VyIC1zaXplPTMyXCIsXHJcbiAgICAgICAgICBcImF2YXRhciA1MzE5NTM3Mzg0OTE4ODc2MjcgLXNpemU9MTI4XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgcmF0ZWxpbWl0OiAzLFxyXG4gICAgICBhcmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICB0eXBlOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogKG1zZzogTWVzc2FnZSkgPT4gbXNnLm1lbWJlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcInNpemVcIixcclxuICAgICAgICAgIHR5cGU6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IG51bGwgfCBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgc3RyIHx8XHJcbiAgICAgICAgICAgICAgKGlzTmFOKE51bWJlcihzdHIpKSAmJlxyXG4gICAgICAgICAgICAgICAgWzE2LCAzMiwgNjQsIDEyOCwgMjU2LCAxMDI0LCAyMDQ4XS5pbmNsdWRlcyhOdW1iZXIoc3RyKSkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHN0cik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1hdGNoOiBcIm9wdGlvblwiLFxyXG4gICAgICAgICAgZmxhZzogW1wiLXNpemU9XCJdLFxyXG4gICAgICAgICAgZGVmYXVsdDogMjA0OCxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlYyhcclxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UsXHJcbiAgICB7IG1lbWJlciwgc2l6ZSB9OiB7IG1lbWJlcjogR3VpbGRNZW1iZXI7IHNpemU6IG51bWJlciB9XHJcbiAgKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXHJcbiAgICAgIG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAuc2V0VGl0bGUoYEF2YXRhciAke21lbWJlci51c2VyLnRhZ31gKVxyXG4gICAgICAgIC5zZXRDb2xvcih0aGlzLmNsaWVudC5jb2xvcnMuZGVmYXVsdClcclxuICAgICAgICAuc2V0SW1hZ2UobWVtYmVyLnVzZXIuZGlzcGxheUF2YXRhclVSTCh7IHNpemU6IHNpemUgYXMgSW1hZ2VTaXplIH0pKVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgIC5zZXRGb290ZXIodGhpcy5jbGllbnQudXNlci50YWcsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19