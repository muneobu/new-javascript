const e = require("express");
const express = require("express");
const apple = express.Router();
const control = require("./control.js");

// const userStorage = require("../../model/userStorage.js");
// const data = userStorage.getUsers("id", "pw");
// const data = userStorage;
// const data = new userStorage();

apple.get("/", control.homeControl.home);
apple.get("/login", control.homeControl.login);
apple.get("/playground", control.homeControl.playground);
apple.get("/register", control.homeControl.register);

apple.post("/login", control.process.login);
apple.post("/register", control.process.register);


module.exports = apple;
