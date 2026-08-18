import { dashboard } from "../Controllers/authController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import express from "express";
export const protectRoute = express.Router();

authRoute.post("/dashboard", authMiddleware, dashboardController);
