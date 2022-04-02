const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.routes");
const cors = require('cors')
const app = express();

mongoose.connect(
'mongodb://localhost:27017/Learing',{ useUnifiedTopology: true})
.then(() => {
  console.log("Connected to database!");
})
.catch(err => {
  console.log("Connection failed!"); console.log(err);
});

mongoose.connection
.on('open', res => {
  console.log(process.env.MONGO_DB_NAME + ' connection has been made...');
})
.on('error', err => {
  console.log(err);
});

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 


app.use((req, res, next) => {
  console.log('inside app - use'); console.log(req.body);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  next();

  
});

app.use("/api/user", userRoutes);

module.exports = app;