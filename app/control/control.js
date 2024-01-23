const homeControl = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  playground: (req, res) =>{
    res.render("playground");
  }
};
const process = {
  login : (req,res)=>{
    console.log(req.body);
  }
};

module.exports = {
  homeControl,
  process
};