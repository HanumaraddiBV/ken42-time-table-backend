const express = require("express");

const app = express();
const scheduleDataController = require("./controllers/schedulerData.controller")
app.use(express.json());




app.use("/data", scheduleDataController);


module.exports = app;