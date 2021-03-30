const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", async (req, res) => {
  res.render("index");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});