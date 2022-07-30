const router = require('express').Router();
const upploadImage = require('../utils/handleStorage');

//const upploadItem = require('../controllers/storage');


router.post('/', upploadImage.single('file'), (req, res)=>{
    res.status(200).json("File uploaded");
});

module.exports= router;