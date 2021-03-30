const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static('public'));

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/login", async (req, res) => {
  res.render("login");
});


/* Student views */

app.get("/student", async (req, res) => {
  res.render("student/index");
});

app.get("/student/user", async (req, res) => {
  res.render("student/user");
});

app.get("/student/add-drop", async (req, res) => {
  res.render("student/add-drop");
});

app.get("/student/schedule", async (req, res) => {
  res.render("student/schedule");
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});