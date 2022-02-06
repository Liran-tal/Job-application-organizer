export const handleSubmit = async (event) => {
	event.preventDefault();
	// Use FormData to get the input values
	const formData = new FormData(event.target);
	// Optionally, convert FormData into an object
	const formDataObject = Object.fromEntries(formData);
	// Process the data
	// await fetch("/api/form", {
	// 	method: "POST",
	// 	body: JSON.stringify(formDataObject)
	// });
	console.log(JSON.stringify(formDataObject));
	
	// Clear the form
	// event.target.reset();
};

