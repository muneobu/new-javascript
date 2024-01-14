const express = require("express");
const app = express();


app.set("views", "./render");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/tomato`));
app.use(express.json());
app.use("/", require("./route/index"));

console.log(__dirname);

module.exports = app;