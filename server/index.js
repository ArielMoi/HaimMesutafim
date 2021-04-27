const express = require("express");
const cors = require("cors");
const path = require("path");
const volunteerRouter = require("./router/volunteer");
const app = express();
require('./config/db')

// static path to client at production
// app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(express.json());
app.use(volunteerRouter);



// server
app.listen(process.env.PORT || 5000, () => {
  console.log(`application start at ${process.env.PORT || 5000}`)
})