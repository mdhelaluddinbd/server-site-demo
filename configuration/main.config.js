const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = process.env.DB_URI;

const databaseConnection = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("=========MongoDB Cloud is connected==========");
  })
  .catch((error) => {
    console.log(error);
  });
