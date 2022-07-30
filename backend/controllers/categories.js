const Category = require('../models/categoryModel');


const createCategory = async(req, res)=>{
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (error) {
        res.status(500).json(error);
        
    }
}

const getCategories = async (req, res)=>{
    try {
        categ = await Category.find();
        res.status(200).json(categ);
    } catch (error) {
        res.status(500).json(error);
        
    }
}
module.exports = {createCategory, getCategories}