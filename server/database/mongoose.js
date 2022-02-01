const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../config/config.env")});
const mongoose = require("mongoose");

console.log(process.env);
const uri = process.env.ENV === "production" 
	? process.env.MONGO_URI 
	: process.env.MONGO_LOCALHOST_URL;
mongoose.connect(uri, () => console.log("mongodb-atlas connected"));