const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const URI = process.env.MONGO;
const dbConnect=()=>{
    try {
        mongoose.connect(
            URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } 
        ).then(()=>console.log('Conexion correcta'))
        .catch(error=>console.error(error));
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnect;