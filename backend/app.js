require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4050;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// <-- Import Routes -->
const propertyRoute = require("./routes/Property.routes");
const contactRoute = require("./routes/Contact.routes");

// <-- Database Connection -->
const datBase = require("./config/dataBase");
datBase();

// <-- Default routes -->
app.get("/", (req, res) => {
  res.send("SainiHomz Backend");
});

// <-- Routes -->
app.use("/api/v1/property", propertyRoute);
app.use("/api/v1/contact", contactRoute);

// <-- Server Start -->
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
