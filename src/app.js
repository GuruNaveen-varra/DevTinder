import express from "express";

//import { authRoute } from "/src/routes/authRoute.js";

//import { protectedRoute } from "/src/routes/protectedRoute.js";

export const app = express();
// Node js core Middle ware used to convert JSON to Javascript object

app.use(express.json());

//app.get("/auth", authRoute);
//app.get("/dashboard", protectedRoute);
