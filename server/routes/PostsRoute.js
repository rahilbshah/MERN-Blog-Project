import express from 'express'
import { createPost, deletePost, getAllPost, getPost, updatePost } from '../controllers/PostsController.js';

const router=express.Router();


//Create Post
router.post("/",createPost)

//Update Post
router.put("/:id",updatePost)

//Delete Post
router.delete("/:id",deletePost)

//Get Post
router.get("/:id",getPost)

//Get All Post
router.get("/",getAllPost)
export default router;