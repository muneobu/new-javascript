const PORT = 5001;
const ip = require("ip");
const app = require("../app.js");


app.listen(
    PORT,
    console.log(`server connected at http://${ip.address()}:${PORT}`)
  );