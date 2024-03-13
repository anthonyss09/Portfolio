import express from "express";
const router = express.Router();
import { addFollower } from "../controllers/usersController.js";

router.route("/cloud9/add-follower").post(addFollower);

export default router;
