import express from 'express'
import { deleteUser, getUser, updateUser } from '../controllers/UserController.js';


const router=express.Router();


//Update User
router.put("/:id",updateUser);

//Delete User
router.delete("/:id",deleteUser);

//Get User
router.get("/:id",getUser)
export default router;