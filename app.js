const ip = require("ip");
const express = require("express");
const app = express();
const PORT = 5001;

app.set("views", "./render");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/tomato`));
app.use(express.json());
app.use("/", require("./route/index"));

console.log(__dirname);
app.listen(
  PORT,
  console.log(`server connected at http://${ip.address()}:${PORT}`)
);
