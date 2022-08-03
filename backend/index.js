require('dotenv').config();
const { json } = require('express');
const express = require('express');
const dbConnect = require('./database/database');
const path = require('path');
const app = express();
const multer = require('multer');


const PORT = process.env.PORT || 5001;

app.use(json());
app.use('/api',require('./routes/index'));
app.use(express.static("storage"));
app.use("/images", express.static(path.join(__dirname, "/images")));


app.listen(PORT,(req, res)=>{
    console.log(`Server is running on port ${PORT}`);
});




dbConnect();