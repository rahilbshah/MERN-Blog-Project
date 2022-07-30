import Post from '../models/PostModel.js'

//Create Post
export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Update Post
export const updatePost = async (req, res) => {
    const { userId } = req.body;
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === userId) {
           const newPost= await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            res.status(200).json(newPost);
        } else {
            res.status(403).json("Action forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

//Delete Post
export const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post Deleted")
    } catch (error) {
        res.status(500).json(error);
    }
}

//Get Post
export const getPost = async (req, res) => {
    try {
        const post= await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error);
    }
}

//Get All Posts
export const getAllPost = async (req, res) => {
    const username=req.query.user;
    const catName=req.query.cat;
    try {
        let posts;
        if(username && catName){
            posts=await Post.find({username,categories:{
                $in:[catName]
            }})
        }else if(username){
            posts=await Post.find({username})
        }else if(catName){
            posts=await Post.find({categories:{
                $in:[catName]
            }})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error);
    }
}