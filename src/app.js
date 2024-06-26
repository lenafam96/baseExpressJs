const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express(); //app express
const port = process.env.PORT;

// config cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static file
app.use(express.static(path.join(__dirname, "public")));

// config router
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/test", (req, res) => res.render("sample.ejs"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
