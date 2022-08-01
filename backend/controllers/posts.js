const PostModel = require('../models/PostModel');
const Categories = require('../models/categoryModel');


const createPost= async(req, res)=>{
  const newPost= new PostModel(req.body);
  try{
    const savedPost = await newPost.save();
    res.status(200).json({data:savedPost, mss:"New Post publised"});
  }catch (error) {
    res.status(500).json(error);
  }
}

const updatePost= async(req, res)=>{
  try{
    const Post = await PostModel.find(req.params._id);
    if(post.username === req.body.username){
      try{
        const updatePost = await PostModel.findByIdAndUpdate(
          req.params._id,
          {$set :req.body,},
          {new:true});
          res.status(200).json({data:updatePost, mss:updatePost});
      }catch (error) {
        res.status(500).json(error);
      }
    }else{
      res.status(401).json({msg:"You can only update your Posts"});
    }
  }catch (error) {  
    res.status(500).json(error);
  }
}


const getAllPost = async(req, res)=>{
  const user = req.query.user;
  const cat = req.query.categories;
  try {
      let posts;
      if(user){
          posts = await PostModel.find({user})
      }else if(cat){
          posts = await PostModel.find({
              categories: {
                $in: [cat],
              },
            });
          } else {
            posts = await PostModel.find();
          }
      res.status(200).json({data:posts, mss:"Posts"});
  } catch (error) {
      res.status(500).json(error);
      
  }
}

const getPostById= async(req, res)=>{
  const id = req.params._id;
  console.log(id);
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  }catch (err) {
    res.status(500).json(err);
    }
}




const deletePost= async(req, res)=>{
  const id = req.params._id;
  try {
    const post = await PostModel.findById(id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {getAllPost, createPost, updatePost, deletePost, getPostById} 