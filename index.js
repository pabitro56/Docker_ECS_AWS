const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/mee", (req, res) => {
  res.send("Hi I am Pabitro");
});

app.listen(5000, () => {
  console.log("listening");
});