const express = require("express");
const ejs = require("ejs");
const path = require("path");
const engine = require("ejs-locals");
const app = express();

// Projects
const projects = require(__dirname + "/public/json/projects.json");

const team8 = require(__dirname + "/public/json/projects/team8.json");

// import testJsonData from

// Public Folder
app.use(express.static(__dirname + "/public"));
// app.use('/ntuedtd112', express.static(__dirname + '/public'));

// Ejs Settings
app.engine("ejs", engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "首頁" });
});

app.get("/project", (req, res) => {
  res.render("project.ejs", { title: "展覽作品", projects: projects });
});

for (let i = 0; i < projects.length; i++) {
  app.get("/project/" + projects[i].team, (req, res) => {
    res.render("team.ejs", { title: projects[i].projectName, project: team8 });
  });
}

// app.get("/", (req, res) => {
//   res.send("This is for test.");
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.listen(5500, () => {
  console.log("Server Running On Port 5500");
});
