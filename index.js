const express = require("express");
const ejs = require("ejs");
const path = require("path");
const engine = require("ejs-locals");
const app = express();

const testJsonData = require(__dirname + "/public/json/testdata.json");

// import testJsonData from

// Public Folder
app.use(express.static(__dirname + "/public"));
// app.use('/ntuedtd112', express.static(__dirname + '/public'));

// Ejs Settings
app.engine("ejs", engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "首頁", testdata: testJsonData });
});

app.get("/project", (req, res) => {
  res.render("project.ejs", { title: "展覽作品", testdata: testJsonData });
});

app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.get("/testparam", (req, res) => {
  res.sendFile(path.join(__dirname, "index2.html"));
});

// app.get("/", (req, res) => {
//   res.send("This is for test.");
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.listen(5500, () => {
  console.log("Server Running On Port 5500");
});
