import express from "express";

import { authRoute } from "./routes/authRoute.js";

import { protectedRoute } from "./routes/protectedRoute.js";

export const app = express();
// Node js core Middle ware used to convert JSON to Javascript object

app.use(express.json());

app.use("/auth", authRoute);
app.use("/dashboard", protectedRoute);
//app.get("/dashboard", protectedRoute);
