const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const {
  GridFsStorage
} = require("multer-gridfs-storage");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

let bucket;

const mongouri = 'mongodb+srv://admin:1234@tryout.wwnyfyq.mongodb.net/db?retryWrites=true&w=majority';

const storage = new GridFsStorage({
    url: mongouri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "newBucket"
        };
        resolve(fileInfo);
      });
    }
  });

  const upload = multer({
    storage
  });
  
  app.get("/fileinfo/:filename", (req, res) => {
    const file = bucket
      .find({
        filename: req.params.filename
      })
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404)
            .json({
              err: "no files exist"
            });
        }
        bucket.openDownloadStreamByName(req.params.filename)
          .pipe(res);
      });
  });
  
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).send("File uploaded successfully");
    console.log("definitely")
  });

module.exports = app;