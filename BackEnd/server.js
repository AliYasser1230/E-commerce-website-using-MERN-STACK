let express = require('express');
let cors = require('cors');
let dotenv = require('dotenv');
let connection=require('./imagedb');
let Grid=require('gridfs-stream');
let upload=require('./routing/upload');
dotenv.config();
let mongoose = require('mongoose');
let router = require('./routing/router');

let gfs;
connection();
const conn=mongoose.connection;
conn.once("open",function(){
  gfs=Grid(conn.db,mongoose.mongo);
  gfs.collection("photos");
})

app.use("/file",upload);

//media routes

app.get('file/:filename',async(req,res)=>{
  try{
   const file=await gfs.files.findOne({filename:req.params.filename});
 const readStream=gfs.createReadStream(file.filename);
 readStream.pipe(res)
  }
  catch(error){ 
  res.send('not found');
  }
})
app.delete("/file/:filename",async(req,res)=>{
  try {
    await gfs.files.deleteOne({filename:req.params.filename})
    res.send("sucess");
  } catch (error) {
    console.log(error)
    res.send("An error occured.")
  }
})


//initialising express as app
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//setting up mongo
mongoose.connect(`mongodb+srv://aliyasser3:Mydb123@e-commerce.qafligx.mongodb.net/?retryWrites=true&w=majority`, 
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


//finally listen to the port
let PORT = process.env.port || 5051;

app.listen(PORT, ()=>{
    console.log("Listening on port: " + PORT)
})
