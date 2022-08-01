const userModel = require('../models/userModel');
const postModel = require('../models/PostModel');
const bcrypt = require('bcrypt');
const { json } = require('express');

const updateUser = async(req, res)=>{
  if(req.body.userId === req.params.id){
    if(req.body.password){
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);

    } catch (error) {
      res.status(500).json(error);
      
    }
  }else{
    res.status(401).json("You can only update your account")
  }
}



const getUsers = async (req, res)=>{
  try{
    const user = await userModel.find();
    console.log(user);
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({error: 'Error getting user'});
    console.error(error);  
  }
}
const getUserById = async (req, res)=>{
  const id = req.params._id;
  try{
    const user = await userModel.findById(id);
    const {password, ...others} = user._doc;
    res.status(200).json(others);
  }catch(error){
    res.status(500).json({error: 'Error getting user'});
    console.error(error);  
  }
}

const deleteUser = async (req, res)=>{
  if (req.body.userId === req.params._id) {
    try {
      const user = await userModel.findById(req.params._id);
      
      try {
        await postModel.deleteMany({ username: user.username });
        await userModel.findByIdAndDelete(req.params._id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
}




module.exports ={getUsers, updateUser, getUserById, deleteUser}