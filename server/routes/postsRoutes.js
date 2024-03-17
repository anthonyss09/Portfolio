import express from "express";
const router = express.Router();
import {
  likePost,
  getPostData,
  createPost,
} from "../controllers/postsController.js";

router.route("/like-post").post(likePost);
router.route("/get-post-data").get(getPostData);
router.route("/create-post").post(createPost);

export default router;
