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



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});