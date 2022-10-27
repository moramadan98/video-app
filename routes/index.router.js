const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


const fullPath = path.basename('../videos') 

router.get('/',(req,res)=>{
    fs.readdir(fullPath, (error, videos) => {
        if (error) console.log(error)
        res.render('index' , {videos : videos})
        })
    
})


module.exports = router ;