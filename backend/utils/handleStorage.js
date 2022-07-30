const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        cb(null, req.body.name);
    },
})

const upploadImage = multer({storage})

module.exports = upploadImage;