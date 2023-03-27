const express = require("express");
const bodyparser = require("body-parser");
const { PORT, SYNC_DB } = require("./config/serverConfig");
const db = require("./models/index");
const ApiRoutes = require("./routes/index");
const { Airport, City } = require("./models/index");
const setupAndStartServer = async () => {
  //made async bcz of db connection for later
  //create server object
  const app = express();
  //const PORT = 3000;
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/flightsandsearchservice/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Sever started on ${PORT}`);
    // if (SYNC_DB) {
    //   db.sequelize.sync({ alter: true });
    // }
    //console.log(process.env.PORT);
    // const city = await City.findOne({
    //   // city object
    //   where: {
    //     id: 21,
    //   },
    // });
    // const airports = await city.getAirports(); // without sync these internal function will not work
    // console.log(airports);
  });
};
setupAndStartServer();
