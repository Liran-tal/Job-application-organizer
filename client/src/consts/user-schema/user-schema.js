import { format } from "date-fns";

export const EMPTY_FORM = {
	position: {
		title: "",
		description: "",
		dateApplied: format(new Date(), 'dd/mm/yyyy'), 
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
		date: format(new Date(), 'dd/mm/yyyy'),
		format: "Not Set",
		followUp: "Not Send"
	},
	applicationStatus: "Ongoing"
}