const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {

    },{timestamps:true}
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users