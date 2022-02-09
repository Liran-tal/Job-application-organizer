const validator = require('validator');
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
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
		},
		followUp: {
			type: String,
			required: true
		},
	},
	applicationStatus: {
		type: String,
		required: true
	}
})

module.exports = applicationSchema



// {
// 	"position": {
// 			"title": "Sales Associate",
// 			"description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
// 			"dateApplied": "2022-04-16T13:43:55Z"
// 	},
// 	"company": {
// 			"name": "Mynte",
// 			"location": "Pereiras"
// 	},
// 	"contact": {
// 			"name": "Alopex lagopus",
// 			"position": "Statistician III",
// 			"email": "pgerrelts9@prweb.com",
// 			"phone": "710-743-8182"
// 	},
// 	"interview": {
// 			"date": "2022-05-30T11:20:25Z",
// 			"format": "Online",
// 			"followUp": "Phone"
// 	},
// 	"applicationStatus": "Ongoing"
// }