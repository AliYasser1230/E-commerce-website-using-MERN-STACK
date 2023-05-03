const express = require("express");
const userModel = require("../models/model");
const imageModel = require("../models/imagemodel");
const User = require("../models/model");
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.post("/register",async(req,res)=>{
  const user = new userModel(req.body);
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
})

app.post("/checkusers",async(req,res)=>{
  let data = req.body;
  try {
    const check = await userModel.findOne({email:data.email});
    if(check == null)
    {
      res.json("no");
    }
    else{
      res.json(check);
    }
  }
   catch (error) 
  {
    console.log(error)
  }
})


app.get("/getallusers", async (request, response) => {
    const users = await userModel.find({});
    
    try {
      response.send(users);
    } 
    catch (error) 
    {
      response.status(500).send(error);
    }
  });
  
  app.post("/users", async (req,res)=>{
    const users=new userModel(req.body);
    users.save()
    .then((result)=>{
   
    }).catch((err)=>{
 console.log(err);
    })
  })

app.post("/add_item", async(req,res)=>{
  const image = new imageModel(req.body);
  try{
    await image.save();
    res.send(image);
  }catch(e){
    res.status(500).send(e);
  }
});

app.get("/shop", async (req,res)=>{
  const imageData = await imageModel.find({});
  try{
    res.send(imageData);
  }catch(e){
    res.status(500).send(e);
  }
});


module.exports = app;
