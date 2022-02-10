
export const EMPTY_FORM = {
	position: {
		title: "",
		description: "",
		dateApplied: new Date()
	},
	company: {
		name: "",
		location: ""
	},
	contact: {
		name: "",
		position: "",
		email: "",
		phone: ""
	},
	interview: {
		date: new Date(),
		format: "Not Set",
		followUp: "Not Send"
	},
	applicationStatus: "Ongoing"
}