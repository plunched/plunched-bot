"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class disableCommand extends discord_akairo_1.Command {
    constructor() {
        super("disable", {
            aliases: ["disable", "prohibit"],
            category: "config",
        });
    }
    exec(message) {
        return message.util.send("coming soon");
    }
}
exports.default = disableCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9jb25maWcvZGlzYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixjQUFlLFNBQVEsd0JBQU87SUFDakQ7UUFDRSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztZQUNoQyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQzFCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBWEQsaUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGlzYWJsZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFwiZGlzYWJsZVwiLCB7XHJcbiAgICAgIGFsaWFzZXM6IFtcImRpc2FibGVcIiwgXCJwcm9oaWJpdFwiXSxcclxuICAgICAgY2F0ZWdvcnk6IFwiY29uZmlnXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcImNvbWluZyBzb29uXCIpO1xyXG4gIH1cclxufVxyXG4iXX0=