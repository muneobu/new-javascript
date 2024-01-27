const e = require("express");
const express = require("express");
const apple = express.Router();
const control = require("../../control/control.js");

// const userStorage = require("../../model/userStorage.js");
// const data = userStorage.getUsers("id", "pw");
// const data = userStorage;
// const data = new userStorage();

apple.get("/", control.homeControl.home);
apple.get("/login", control.homeControl.login);
apple.get("/playground", control.homeControl.playground);
apple.post("/login", control.process.login);

// apple.post("/login", (req, res) => {
//   if (data.id.includes(req.body.id)) {
//     const idx = data.id.indexOf(req.body.id);
//     if (data.pw[idx] === req.body.pw) {
//       response.success = true;
//       response.msg = "login success";
//       console.log(response);
//       res.json(response);
//     } else {
//       response.success = false;
//       response.msg = "wrong password";
//       console.log(response);
//       res.json(response);
//     }
//   } else {
//     res.json({ msg: "존재하지 않는 아이디입니다" });
//   }
// });

module.exports = apple;
