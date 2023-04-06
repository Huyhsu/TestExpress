const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/test", (req, res) => {
  // res.send("This is for test.");
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.listen(5500, () => {
  console.log("Server Running");
});
