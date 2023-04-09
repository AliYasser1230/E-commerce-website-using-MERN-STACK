const express = require("express");
const userModel = require("../models/model");
const imageModel = require("../models/imagemodel");
const app = express();

app.post("/add_user", async (request, response) => {
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
    } catch (error) {
      response.status(500).send(error);
    }
  });

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
