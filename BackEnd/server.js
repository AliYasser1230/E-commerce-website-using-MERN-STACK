let express = require('express');
let cors = require('cors');
const multer = require("multer");
const fs = require("fs");
let dotenv = require('dotenv');
dotenv.config();
let mongoose = require('mongoose');
let mongodb = require('mongodb');
let router = require('./routing/router');
let imageModel = require('./models/imagemodel');
//initialising express as app
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//setting up mongo
mongoose.connect(`mongodb+srv://admin:123@firstcluster.or82qdv.mongodb.net/`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//testing to see whether mongo's connection has been established or nots
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


//setting up storage for images, specifically for shop, including requests
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("Image"), (req, res) => {
  const saveImage = imageModel({
    name: req.body.name,
    price: req.body.price,
    img: {
      data: req.file.buffer,
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
  res.send("image is saved");
});

app.get('/retrieve',async (req,res)=>{
  const allData = await imageModel.find()
  res.json(allData)
})

app.get('/delete/:id', async (req,res)=>{
  let {id} = req.params;
  try{
    const exist = await imageModel.findById(id);
    console.log(exist);
    if(exist){
      const data = await imageModel.findByIdAndRemove(id);
      res.send(id + " Has been removed");
    }
    else{
      res.send('Document doesnt exist');
    }
  }
  catch(err){
    res.send(err);
  }
  
});



//finally listen to the port
let PORT =  5050;

app.listen(PORT, ()=>{
    console.log("Listening on port: " + PORT)
})
