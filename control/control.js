const homeControl = {
  home: (req, res) => {
    res.render("../render/index.ejs");
  },
  login: (req, res) => {
    res.render("../render/login.ejs");
  },
  playground: (req, res) =>{
    res.render("../render/playground.ejs");
  }
};
module.exports = homeControl;
