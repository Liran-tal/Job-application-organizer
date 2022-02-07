import React, { useState } from 'react';
import Button from '@mui/material/Button';
import USER_MOCK_DATA from '../../USER_MOCK_DATA.json'
import Position from '../form-fields/position.component';
import Company from '../form-fields/company.component';
import Contact from '../form-fields/contact.component';
import Interview from '../form-fields/interview.component';
import MiscFields from '../form-fields/misc-fields.component';
import { Box } from '@mui/material';
import * as UserData from '../../providers/user-data/user-data.context';
import { handleSubmit } from '../../utils/form-utils'
import { StyledForm } from './job-form.style';

function JobForm({ isNew }) {
	const [job, setJob] = useState(USER_MOCK_DATA[0]);
	const userData = UserData.useUserContext()
	const setUserData = UserData.useSetUserContext();

	const onSubmit = (event) => {
		event.preventDefault();	
		
		handleSubmit(userData, setUserData, job, isNew);
	}

	const handleChangeForm = (component, componentName) => {
		setJob({
			...job,
			[componentName]: component
		});
	}

	return (
		<StyledForm
			onSubmit={onSubmit}
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
		</StyledForm>
	);
}

export default JobForm;
