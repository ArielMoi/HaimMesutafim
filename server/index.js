const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// static path to client at production
// app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(express.json());