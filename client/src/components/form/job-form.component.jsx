import React, { useState } from "react";
import Button from '@mui/material/Button';
import USER_MOCK_DATA from '../../USER_MOCK_DATA.json'
import Position from "../form-fields/position.component";
import Company from "../form-fields/company.component";
import Contact from "../form-fields/contact.component";
import Interview from "../form-fields/interview.component";
import MiscFields from "../form-fields/misc-fields.component";
import { Box } from "@mui/material";
import * as Axios from '../../api/Axios.Api';


function JobForm() {

	const [job, setJob] = useState(USER_MOCK_DATA[0]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			if (isNew) {
				Axios.createJob
			}
			Axios.updateJob
		} catch (error) {
			
		}
	};

	const handleChangeForm = (component, componentName) => {
		setJob({
			...job,
			[componentName]: component
		});
	}

	return (
		<Box 
			onSubmit={handleSubmit}
			component="form"
      autoComplete="off"
		>
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
		</Box>
	);
}

export default JobForm;
