const express = require('express');
const router = express.Router();
const fs = require('fs')

const PATH = __dirname; 
//console.log(PATH);

const rmExtension=(filename)=>{
    return filename.split('.').shift();
}

fs.readdirSync(PATH).filter((file)=>{
    const name = rmExtension(file)
    if (name !== 'index'){
        console.log(`Cargando la ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
})



module.exports = router