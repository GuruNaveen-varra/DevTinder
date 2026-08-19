import { dashboard } from "../Controllers/authController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import express from "express";
export const protectedRoute = express.Router();

protectedRoute.post("/dashboard", authMiddleware, dashboard);
