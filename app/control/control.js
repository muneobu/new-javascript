const homeControl = {
  home: (req, res) => {
    res.render("../src/views/index.ejs");
  },
  login: (req, res) => {
    res.render("../src/views/login.ejs");
  },
  playground: (req, res) =>{
    res.render("../src/views/playground.ejs");
  }
};
module.exports = homeControl;
