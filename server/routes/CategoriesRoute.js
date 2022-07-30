import express from 'express'
import { createCategory, getAllCategories } from '../controllers/CategoryController.js';

const router=express.Router();

//Create Category
router.post("/",createCategory)

//Get Categories
router.get("/",getAllCategories)


export default router;