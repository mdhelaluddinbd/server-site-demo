const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  sex: {
    type: String,
    require: true,
  },
  phone:{
    type:Number,
    require:true
  }
});

const usersModel = mongoose.model("users", userSchema);

module.exports = usersModel;
