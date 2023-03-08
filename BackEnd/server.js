const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const mongodb= require('mongodb');

const dbconn=mongodb.MongoClient.connect('mongodb://localhost:27017');

const app=express();


app.use(express.static(path.resolve(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/post-feedback', function (req, res) {
  dbconn.then(function(db) {
      delete req.body._id; // for safety reasons
      db.collection('feedbacks').insertOne(req.body);
  });    
  res.send('Data received:\n' + JSON.stringify(req.body));
});
app.listen(process.env.PORT ||3000,process.env.IP || '0.0.0.0' );