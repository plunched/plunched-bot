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
        console.log("connected to postgresql");
};
db();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF5QztBQUN6QyxtRUFBMkM7QUFDM0MsNkJBQTRCO0FBRTVCLE1BQU0sTUFBTSxHQUFjLElBQUksbUJBQVMsQ0FBQyxFQUFFLEtBQUssRUFBTCxjQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWYsTUFBTSxFQUFFLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDcEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDN0QsSUFBSSxFQUFFO1FBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUVGLEVBQUUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9rZW4sIG93bmVycyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gXCIuL2NsaWVudC9Cb3RjbGllbnRcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuL2RiXCI7XHJcblxyXG5jb25zdCBjbGllbnQ6IEJvdENsaWVudCA9IG5ldyBCb3RDbGllbnQoeyB0b2tlbiwgb3duZXJzIH0pO1xyXG5jbGllbnQuc3RhcnQoKTtcclxuXHJcbmNvbnN0IGRiID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIEZST00gZ3VpbGRzIExJTUlUIDEwXCIpO1xyXG4gIGlmIChkYikgY29uc29sZS5sb2coXCJjb25uZWN0ZWQgdG8gcG9zdGdyZXNxbFwiKTtcclxufTtcclxuXHJcbmRiKCk7XHJcbiJdfQ==