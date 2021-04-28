"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const Botclient_1 = __importDefault(require("./client/Botclient"));
const db_1 = require("./db");
const client = new Botclient_1.default({ token: config_1.token, owners: config_1.owners });
const db = async () => {
    const db = await db_1.pool.query("SELECT * FROM guilds LIMIT 10");
    const user = await db_1.pool.query("SELECT * FROM users LIMIT 10");
    if (db && user)
        return console.log("connected to postgresql");
    console.error("Failed to connect ot postgres db!");
};
db();
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFpRDtBQUNqRCxtRUFBMkM7QUFDM0MsNkJBQTRCO0FBRTVCLE1BQU0sTUFBTSxHQUFjLElBQUksbUJBQVMsQ0FBQyxFQUFFLEtBQUssRUFBTCxjQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBTSxFQUFFLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDcEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDN0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDOUQsSUFBSSxFQUFFLElBQUksSUFBSTtRQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUM7QUFDRixFQUFFLEVBQUUsQ0FBQztBQUVMLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRva2VuLCBvd25lcnMsIGNvbG9ycyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gXCIuL2NsaWVudC9Cb3RjbGllbnRcIjtcclxuaW1wb3J0IHsgcG9vbCB9IGZyb20gXCIuL2RiXCI7XHJcblxyXG5jb25zdCBjbGllbnQ6IEJvdENsaWVudCA9IG5ldyBCb3RDbGllbnQoeyB0b2tlbiwgb3duZXJzIH0pO1xyXG5jb25zdCBkYiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYiA9IGF3YWl0IHBvb2wucXVlcnkoXCJTRUxFQ1QgKiBGUk9NIGd1aWxkcyBMSU1JVCAxMFwiKTtcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcG9vbC5xdWVyeShcIlNFTEVDVCAqIEZST00gdXNlcnMgTElNSVQgMTBcIik7XHJcbiAgaWYgKGRiICYmIHVzZXIpIHJldHVybiBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCB0byBwb3N0Z3Jlc3FsXCIpO1xyXG4gIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY29ubmVjdCBvdCBwb3N0Z3JlcyBkYiFcIik7XHJcbn07XHJcbmRiKCk7XHJcblxyXG5jbGllbnQuc3RhcnQoKTtcclxuIl19