import {
  login,
  register,
  resetpassword,
  retreiveUsername,
} from "../Controllers/authController.js";

import express from "express";
export const authRoute = express.Router();

authRoute.post("/login", login);

authRoute.post("/register", register);

authRoute.post("/resetpassword", resetpassword);
authRoute.post("/retreiveusername", retreiveUsername);
