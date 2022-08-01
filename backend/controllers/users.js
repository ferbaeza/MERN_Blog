const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const getUsers = async (req, res)=>{
  try{
    const user = await userModel.find();
    const {password, ...other} = user._doc;
    res.status(200).send();
  }catch(error){
    res.status(500).send({error: 'Error getting user'});
    console.error(error);  
  }
}
const getUserById = async (req, res)=>{
  const id = req.params._id;
  try{
    const user = await userModel.findById(id);
    const {password, ...other} = user._doc;
    res.status(200).send(other);
  }catch(error){
    res.status(500).send({error: 'Error getting user'});
    console.error(error);  

}
const deleteUser = async (req, res)=>{
  const id = req.params._id;
  if(req.body.userId === id){
    
  }

}


module.exports = {getUsers, getUserById, updateUser, deleteUser}