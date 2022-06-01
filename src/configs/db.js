require("dotenv").config();
const mongoose = require("mongoose");

//connecting to database
module.exports = () => {
  return mongoose.connect(
    process.env.databaseLINK,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected")
  );
};