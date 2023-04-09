const express = require("express");
const upload=require('../middleware/upload');
const router=express.Router();

router.post("/upload",upload.single("file"),(req,res)=>{
    if(req.file===undefined) return res.send("you must select a file.");
    const imageUrl=`http://localhost:5051/file/${req.file.filename}`;
    return res.send(imageUrl);

})
module.exports=router;