"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const Botclient_1 = __importDefault(require("./client/Botclient"));
const db_1 = require("./db");
const client = new Botclient_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
const db = async () => {
    const db = await db_1.pool.query("SELECT * FROM guilds LIMIT 10");
    if (db)
        return console.log("connected to postgresql");
    console.error("Failed to connect ot postgres db!");
};
db();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpRDtBQUNqRCxtRUFBMkM7QUFDM0MsNkJBQTRCO0FBRTVCLE1BQU0sTUFBTSxHQUFjLElBQUksbUJBQVMsQ0FBQyxFQUFFLEtBQUssRUFBTCxjQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWYsTUFBTSxFQUFFLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDcEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDN0QsSUFBSSxFQUFFO1FBQUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BELENBQUMsQ0FBQztBQUVGLEVBQUUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9rZW4sIG93bmVycywgY29sb3JzIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCBCb3RDbGllbnQgZnJvbSBcIi4vY2xpZW50L0JvdGNsaWVudFwiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4vZGJcIjtcclxuXHJcbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7IHRva2VuLCBvd25lcnMgfSk7XHJcbmNsaWVudC5zdGFydCgpO1xyXG5cclxuY29uc3QgZGIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBndWlsZHMgTElNSVQgMTBcIik7XHJcbiAgaWYgKGRiKSByZXR1cm4gY29uc29sZS5sb2coXCJjb25uZWN0ZWQgdG8gcG9zdGdyZXNxbFwiKTtcclxuICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNvbm5lY3Qgb3QgcG9zdGdyZXMgZGIhXCIpXHJcbn07XHJcblxyXG5kYigpO1xyXG4iXX0=