const userStorage = require("../../model/userStorage.js");
const data = userStorage.getUsers("id", "pw","name");
const response = {};
const User = require("../../model/User.js")

const homeControl = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  playground: (req, res) =>{
    res.render("playground");
  },
  register:(req,res)=>{
    res.render("register")
  }
};
const process = {
  login : (req,res)=>{
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    // if(req.body.id === "maratang"){
    //   throw new Error("yummy food");
    // }else if (data.id.includes(req.body.id)) {
    //   const idx = data.id.indexOf(req.body.id);
    //   if (data.pw[idx] === req.body.pw) {
    //     response.success = true;
    //     response.msg = "login success";
    //     console.log(response);
    //     res.json(response);
    //   } else {
    //     response.success = false;
    //     response.msg = "wrong password";
    //     console.log(response);
    //     res.json(response);
    //   }
    // } else {
    //   res.json({ msg: "존재하지 않는 아이디입니다" });
    // }
  },
  register :(req,res)=>{
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);}
};

module.exports = {
  homeControl,
  process
};