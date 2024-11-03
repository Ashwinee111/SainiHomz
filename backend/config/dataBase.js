const mongoose = require("mongoose");

const dataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.log(error.message);
    console.log("DataBase Connection Failed");
    process.exit(1);
  }
};

module.exports = dataBase;
