import axios from "axios";
import express from "express";

import User from "../models/user";
const userRouter = express.Router();

userRouter.get("/all", async (req, res) => {
  const allUsers = await User.find().sort({totalWagered : -1});
  res.send(allUsers);

});

export default userRouter;
