const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = async(req, res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass
        });
        const user = await newUser.save();
        console.log(user);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

const loginUser = async(req, res)=>{
    try {
        const user = await User.findOne({ username : req.body.username});
        !user && res.status(400).json("Usuario no encontrado");

        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json("Password not valid");     
        

        //const {password, ...others}= user._doc;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}



module.exports= {registerUser, loginUser}