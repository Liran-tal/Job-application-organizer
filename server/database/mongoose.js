const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../config/config.env")});

const uri = process.env.MONGO_URI;
mongoose.connect(uri, () => console.log("mongodb-atlas connected"));