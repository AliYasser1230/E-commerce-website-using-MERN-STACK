const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
 name:{
  type: String,
  required: true,
 },
 admin:{
  type: String,
  required: false,
 }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;