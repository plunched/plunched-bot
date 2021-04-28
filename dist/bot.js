"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const Botclient_1 = __importDefault(require("./client/Botclient"));
const db_1 = require("./db");
const client = new Botclient_1.default({ token: config_1.token, owners: config_1.owners });
let retries = 5;
const dbconnect = async () => {
    while (retries)
        try {
            db_1.pool.connect();
            break;
        }
        catch (err) {
            console.error(err);
            retries -= 1;
            console.log(`retries left: ${retries}`);
            await new Promise((res) => setTimeout(res, 1e3));
        }
    console.log("connect to the db!");
};
dbconnect();
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpRDtBQUNqRCxtRUFBMkM7QUFDM0MsNkJBQTRCO0FBRTVCLE1BQU0sTUFBTSxHQUFjLElBQUksbUJBQVMsQ0FBQyxFQUFFLEtBQUssRUFBTCxjQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDLENBQUM7QUFFM0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLE1BQU0sU0FBUyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzNCLE9BQU8sT0FBTztRQUNaLElBQUk7WUFDRixTQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixNQUFNO1NBQ1A7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO0lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLFNBQVMsRUFBRSxDQUFDO0FBQ1osTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9rZW4sIG93bmVycywgY29sb3JzIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCBCb3RDbGllbnQgZnJvbSBcIi4vY2xpZW50L0JvdGNsaWVudFwiO1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSBcIi4vZGJcIjtcclxuXHJcbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7IHRva2VuLCBvd25lcnMgfSk7XHJcblxyXG5sZXQgcmV0cmllcyA9IDU7XHJcbmNvbnN0IGRiY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICB3aGlsZSAocmV0cmllcylcclxuICAgIHRyeSB7XHJcbiAgICAgIHBvb2wuY29ubmVjdCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHJpZXMgLT0gMTtcclxuICAgICAgY29uc29sZS5sb2coYHJldHJpZXMgbGVmdDogJHtyZXRyaWVzfWApO1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KHJlcywgMWUzKSk7XHJcbiAgICB9IGNvbnNvbGUubG9nKFwiY29ubmVjdCB0byB0aGUgZGIhXCIpXHJcbn07XHJcblxyXG5kYmNvbm5lY3QoKTtcclxuY2xpZW50LnN0YXJ0KCk7XHJcbiJdfQ==