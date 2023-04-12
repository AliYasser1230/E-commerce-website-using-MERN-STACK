let express = require('express');
let cors = require('cors');
let dotenv = require('dotenv');
dotenv.config();
let mongoose = require('mongoose');
let router = require('./routing/router');

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
