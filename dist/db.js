"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "postgres",
    password: "pizzaoven",
    host: "localhost",
    port: 5432,
    database: "plunched_bot",
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQTBCO0FBRWIsUUFBQSxJQUFJLEdBQUcsSUFBSSxTQUFJLENBQUM7SUFDM0IsSUFBSSxFQUFFLFVBQVU7SUFDaEIsUUFBUSxFQUFFLFdBQVc7SUFDckIsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsY0FBYztDQUN6QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcclxuICB1c2VyOiBcInBvc3RncmVzXCIsXHJcbiAgcGFzc3dvcmQ6IFwicGl6emFvdmVuXCIsXHJcbiAgaG9zdDogXCJsb2NhbGhvc3RcIixcclxuICBwb3J0OiA1NDMyLFxyXG4gIGRhdGFiYXNlOiBcInBsdW5jaGVkX2JvdFwiLFxyXG59KTtcclxuIl19