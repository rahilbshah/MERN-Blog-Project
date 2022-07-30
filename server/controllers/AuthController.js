import User from '../models/UsersModel.js'
import bcrypt from "bcryptjs"

export const register=async(req,res)=>{
    try {
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            profilePic:req.body.profilePic
        })
        const savedUser=await newUser.save();
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const login=async(req,res)=>{
    try {
        const user=await User.findOne({username:req.body.username})
        if(!user) res.status(404).json("User Does Not Exit")
        else{
            const validity=await bcrypt.compare(req.body.password,user.password)
            if(!validity){
                res.status(400).json("Wrong Password")
            }else{
                const {password,...otherDetails}=user._doc;
                res.status(200).json({...otherDetails})
            }
        }
    } catch (error) {
        res.status(500).json(error)
    }
}