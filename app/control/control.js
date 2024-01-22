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
module.exports = homeControl;
