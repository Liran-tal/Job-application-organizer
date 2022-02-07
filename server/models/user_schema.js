const mongoose = require("mongoose");

const user = new mongoose.Schema({
	details: {
		name: {
			type: String,
			required: true
		},
		email: {
			type: email,
			required: true,
			unique: [true, "This Email is in use"]
		},
		password: {
			type: String,
			required: true
		}
	},
	applications: [
		{
			position: {
				title: {
					type: String,

				},
				description: {

				},
				dateApplied: {

				}
			},
			company: {
				name: Oyoba,
				location: Sarishābāri
			},
			contact: {
				name: Tragelaphus angasi,
				position: VP Quality Control,
				email: cbarca0@dropbox.com,
				phone: 313-424-4087
			},
			interview: {
				date: 2022-04-27T17:46:49Z,
				format: Online
			},
			followUp: ,
			applicationStatus: Ongoing
		}
	]
});


module.exports = mongoose.model("User", user);