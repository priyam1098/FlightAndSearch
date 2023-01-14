const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");
const setupAndStartServer = async () => {
  //made async bcz of db connection for later
  //create server object
  const app = express();
  //const PORT = 3000;
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Sever started on ${PORT}`);
    //console.log(process.env.PORT);
  });
};
setupAndStartServer();
