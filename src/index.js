const express = require("express");
const bodyparser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  //create server object
  const app = express();
  //const PORT = 3000;
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Sever started on ${PORT}`);
    console.log(process.env.PORT);
  });
};
setupAndStartServer();
