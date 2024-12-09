import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controller/postController.js";
const router = express.Router();

let posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

// Get all posts

router.get("/", getPosts);

// Get single post

router.get("/:id", getPost);

//Create new post
router.post("/", createPost);

//Update post
router.put("/:id", updatePost);

// delete post

router.delete("/:id", deletePost);

export default router;
