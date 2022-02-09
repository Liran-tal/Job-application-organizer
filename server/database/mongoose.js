const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../config/config.env") });
const mongoose = require("mongoose");

const uri = process.env.ENV === "production"
	? process.env.MONGO_URI
	: process.env.MONGO_LOCALHOST_URL;
mongoose.connect(process.env.MONGO_URI, (err, mongo) => {
	if (err) return console.log("mongoose connect Error: ", err)
	const { host, name, port } = mongo
	console.log({ host, name, port })
});

