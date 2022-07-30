import Category from '../models/CategoryModel.js'

//Create Category
export const createCategory=async (req,res)=>{
    const newCat=new Category(req.body);
    try {
        const saveCat=await newCat.save();
        res.status(200).json(saveCat);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Get Categories
export const getAllCategories=async (req,res)=>{
    try {
        const cat=await Category.find()
        res.status(200).json(cat);
    } catch (error) {
        res.status(500).json(error);
    }
}