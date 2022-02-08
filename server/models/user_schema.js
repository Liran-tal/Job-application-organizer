const validator = require('validator');
const mongoose = require('mongoose');

const user = new mongoose.Schema({
	details: {
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
		}
	},
	applications: [
		{
			id: {
				type: String,
				required: true
			},
			position: {
				title: {
					type: String,
					required: true
				},
				description: {
					type: String,
				},
				dateApplied: {
					type: Date,
					required: true
				}
			},
			company: {
				name: {
					type: String,
					required: true
				},
				location: {
					type: String,
				}
			},
			contact: {
				name: {
					type: String,
					required: true
				},
				position: {
					type: String,
					required: true
				},
				email: {
					type: String,
					required: true,
					validate: validator.isEmail					
				},
				phone: {
					type: String,
				}
			},
			interview: {
				date: {
					type: Date,
				},
				format: {
					type: String,
				}
			},
			followUp: {
				type: String,
				required: true
			},
			applicationStatus: {
				type: String,
				required: true
			}
		}
	]
});


module.exports = mongoose.model("User", user);