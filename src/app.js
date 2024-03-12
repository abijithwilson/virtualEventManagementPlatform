require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 4000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error occured, cannot start the server");
  } else{
    console.log("Started server")
  }
});
