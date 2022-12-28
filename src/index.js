const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupAndStartServer = async () => {
  //create server object
  const app = express();
  //const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Sever started on ${PORT}`);
    console.log(process.env.PORT);
  });
};
setupAndStartServer();
