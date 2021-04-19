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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmZvcm1hdGlvbi9hdmF0YXJDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUEyRTtBQUUzRSxNQUFxQixhQUFjLFNBQVEsd0JBQU87SUFDaEQ7UUFDRSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztZQUN6QixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsUUFBUSxFQUFFO29CQUNSLFFBQVE7b0JBQ1IsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLHFDQUFxQztpQkFDdEM7YUFDRjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFO2dCQUNKO29CQUNFLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU07aUJBQ3RDO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQWlCLEVBQUU7d0JBQy9DLElBQ0UsR0FBRzs0QkFDSCxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2pCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUUzRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckIsT0FBTyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztvQkFDRCxLQUFLLEVBQUUsUUFBUTtvQkFDZixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUNULE9BQWdCLEVBQ2hCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBeUM7UUFFdkQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDdEIsSUFBSSx5QkFBWSxFQUFFO2FBQ2YsUUFBUSxDQUFDLFVBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNyQyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFyREQsZ0NBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBHdWlsZE1lbWJlciwgTWVzc2FnZUVtYmVkLCBJbWFnZVNpemUgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJhdmF0YXJcIiwge1xyXG4gICAgICBhbGlhc2VzOiBbXCJhdmF0YXJcIiwgXCJhdlwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiaW5mb3JtYXRpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICBjb250ZW50OiBcImRpc3BsYXkgdGhlIGF2YXRhciBvZiBhIG1lbWJlclwiLFxyXG4gICAgICAgIHVzYWdlOiBcImF2YXRhciA8bWVtYmVyPiA8c2l6ZT5cIixcclxuICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgXCJhdmF0YXJcIixcclxuICAgICAgICAgIFwiYXZhdGFyIEB1c2VyIzAwMDFcIixcclxuICAgICAgICAgIFwiYXZhdGFyIHVzZXIgLXNpemU9MzJcIixcclxuICAgICAgICAgIFwiYXZhdGFyIDUzMTk1MzczODQ5MTg4NzYyNyAtc2l6ZT0xMjhcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICByYXRlbGltaXQ6IDMsXHJcbiAgICAgIGFyZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJtZW1iZXJcIixcclxuICAgICAgICAgIHR5cGU6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAobXNnOiBNZXNzYWdlKSA9PiBtc2cubWVtYmVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgdHlwZTogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogbnVsbCB8IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBzdHIgfHxcclxuICAgICAgICAgICAgICAoaXNOYU4oTnVtYmVyKHN0cikpICYmXHJcbiAgICAgICAgICAgICAgICBbMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDEwMjQsIDIwNDhdLmluY2x1ZGVzKE51bWJlcihzdHIpKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc3RyKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF0Y2g6IFwib3B0aW9uXCIsXHJcbiAgICAgICAgICBmbGFnOiBbXCItc2l6ZT1cIl0sXHJcbiAgICAgICAgICBkZWZhdWx0OiAyMDQ4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKFxyXG4gICAgbWVzc2FnZTogTWVzc2FnZSxcclxuICAgIHsgbWVtYmVyLCBzaXplIH06IHsgbWVtYmVyOiBHdWlsZE1lbWJlcjsgc2l6ZTogbnVtYmVyIH1cclxuICApOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcclxuICAgICAgbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldFRpdGxlKGBBdmF0YXIgJHttZW1iZXIudXNlci50YWd9YClcclxuICAgICAgICAuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuICAgICAgICAuc2V0SW1hZ2UobWVtYmVyLnVzZXIuZGlzcGxheUF2YXRhclVSTCh7IHNpemU6IHNpemUgYXMgSW1hZ2VTaXplIH0pKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19