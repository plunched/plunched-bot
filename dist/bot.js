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
    const user = await db_1.pool.query("SELECT * FROM users LIMIT 10");
    if (db && user)
        return console.log("connected to postgresql");
    console.error("Failed to connect ot postgres db!");
};
db();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpRDtBQUNqRCxtRUFBMkM7QUFDM0MsNkJBQTRCO0FBRTVCLE1BQU0sTUFBTSxHQUFjLElBQUksbUJBQVMsQ0FBQyxFQUFFLEtBQUssRUFBTCxjQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWYsTUFBTSxFQUFFLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDcEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDN0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDOUQsSUFBSSxFQUFFLElBQUksSUFBSTtRQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUM7QUFFRixFQUFFLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRva2VuLCBvd25lcnMsIGNvbG9ycyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gXCIuL2NsaWVudC9Cb3RjbGllbnRcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuL2RiXCI7XHJcblxyXG5jb25zdCBjbGllbnQ6IEJvdENsaWVudCA9IG5ldyBCb3RDbGllbnQoeyB0b2tlbiwgb3duZXJzIH0pO1xyXG5jbGllbnQuc3RhcnQoKTtcclxuXHJcbmNvbnN0IGRiID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIEZST00gZ3VpbGRzIExJTUlUIDEwXCIpO1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwb29sLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSB1c2VycyBMSU1JVCAxMFwiKTtcclxuICBpZiAoZGIgJiYgdXNlcikgcmV0dXJuIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkIHRvIHBvc3RncmVzcWxcIik7XHJcbiAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IG90IHBvc3RncmVzIGRiIVwiKTtcclxufTtcclxuXHJcbmRiKCk7XHJcbiJdfQ==