const express = require("express");
const ejs = require("ejs");
const path = require("path");
const engine = require("ejs-locals");
const app = express();

app.use(express.static(__dirname + "/public"));

app.engine("ejs", engine);
app.set("views", "./views");
app.set("view engine", "ejs");

// app.use('/ntuedtd112', express.static(__dirname + '/public'));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/test", (req, res) => {
  // res.send("This is for test.");
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.get("/testparam", (req, res) => {
  // res.send("This is for test.");
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.listen(5500, () => {
  console.log("Server Running");
});
