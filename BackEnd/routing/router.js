const express = require("express");
const userModel = require("../models/model");
const imageModel = require("../models/imagemodel");
const User = require("../models/model");
const app = express();

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
app.get("/register",async(req,res)=>{
  try{
  const check=await User.findOne(req.body)
  if(check)
  {
    res.json("exist")
  }
  else
  {
    res.send(check);
    res.json("not exist")
}
  }catch(err){
    res.json("not exist")
  }
})

app.get("/add_user", async (request, response) => {
    const user = new userModel(request.body);
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
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
