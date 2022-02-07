import React, { useState } from "react";
import Button from '@mui/material/Button';
// import * as FormMethods from '../../utils/form-fns.utils'
import USER_MOCK_DATA from '../../USER_MOCK_DATA.json'
import Position from "../form-fields/position.component";
import Company from "../form-fields/company.component";
import Contact from "../form-fields/contact.component";
import Interview from "../form-fields/interview.component";
import MiscFields from "../form-fields/misc-fields.component";


function JobForm() {

	const [job, setJob] = useState(USER_MOCK_DATA[0]);

	const handleSubmit = async (event) => {
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

	const handleChangeForm = (component, componentName) => {
		setJob({
			...job,
			[componentName]: component
		});
	}
	
  return (
    <form onSubmit={handleSubmit}>
			<div>
				{job.position.title}
			</div>
			<Position 
				position={job.position}
				name="position"
				handleChangeForm={handleChangeForm} 
			/>
			<Company 
				company={job.company}
				handleChangeForm={handleChangeForm} 
			/>
			<Contact
				contact={job.contact}
				handleChangeForm={handleChangeForm} 
			/>
			<Interview
				interview={job.interview}
				handleChangeForm={handleChangeForm} 
			/>
			<MiscFields 
				followUp={job.followUp}
				applicationStatus={job.applicationStatus}
				handleChangeForm={handleChangeForm} 
			/>
			<Button 
				type="submit"
				variant="contained"
			>
				Save
			</Button>
    </form>
  );
}

export default JobForm;
