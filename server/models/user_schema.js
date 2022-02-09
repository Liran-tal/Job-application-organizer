const validator = require('validator');
const mongoose = require('mongoose');
const applicationSchema = require('./application_schema');

const user = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: [true, "This Email is in use"],
		validate: validator.isEmail
	},
	password: {
		type: String,
		required: true
	},
	applications: [applicationSchema]
});

const User = mongoose.model("users", user);
module.exports = User