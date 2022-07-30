const Posts = require('../models/PostModel');
const Categories = require('../models/categoryModel');

const getAllPost = async(req, res)=>{
    const user = req.query.user;;
    const cat = req.query.categorie;
    try {
        let posts;
        if(user){
            posts = await Posts.find({user})
        }else if(cat){
            posts = await Posts.find({
                categories: {
                  $in: [cat],
                },
              });
            } else {
              posts = await Posts.find();
            }
        res.status(200).json({data:posts, mss:"Posts"});
    } catch (error) {
        res.status(500).json(error);
        
    }
}

const createPost= async(req, res)=>{}
const updatePost= async(req, res)=>{}
const deletePost= async(req, res)=>{}
const getPostById= async(req, res)=>{}

module.exports = {getAllPost, createPost, updatePost, deletePost, getPostById} 