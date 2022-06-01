const express = require("express");

const app = express();
const sheduleDataController = require("./controllers/shedulerData.controller")
app.use(express.json());




app.use("/data", sheduleDataController);


module.exports = app;