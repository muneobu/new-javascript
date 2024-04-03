const userStorage = require("../model/userStorage.js");
// const data = userStorage.getUsers("id", "pw","name");
const response = {};
const User = require("../model/User.js")

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
  login :async (req,res)=>{
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register :async (req,res)=>{
    const user = new User(req.body);
    const response = await user.register();
    console.log(response,"control.js 48");
    return res.json(response);
    }
};

module.exports = {
  homeControl,
  process
};