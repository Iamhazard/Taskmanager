//to connect database we use env file
//env file MONGO URI has link to mongo db
const dotenv = require("dotenv").config();
const taskRoute = require("./routes/taskRoute");
const express = require("express");

//second wayy to connect database
const mongoose = require("mongoose");

const Task = require("./models/taskModel");

//path of data base

const app = express();

//express middlware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(taskRoute);

//Middleware custom

// const logger = (req, res, next) => {
//   console.log("MIDDLEWARE");
//   console.log(req.method);

//   next();
// };

//Routes for home pages
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
