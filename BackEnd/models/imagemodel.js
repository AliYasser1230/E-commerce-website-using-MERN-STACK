const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        default: 0,
      },
    img:
    {
        data: Buffer,
        contentType: String
    }
})

const Image = mongoose.model("Image", ImageSchema);


module.exports = Image;