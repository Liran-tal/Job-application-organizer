import React, { useState } from 'react';
import USER_MOCK_DATA from '../../USER_MOCK_DATA.json'
import EMPTY_FORM from '../../consts/user-schema/user-schema' 
import Position from '../form-fields/position.component';
import Company from '../form-fields/company.component';
import Contact from '../form-fields/contact.component';
import Interview from '../form-fields/interview.component';
import MiscFields from '../form-fields/misc-fields.component';
import FormButtons from '../form-btns/form-btns.component';
import * as UserData from '../../providers/user-data/user-data.context';
import { handleSubmit } from '../../utils/form-utils'
import { Grid } from '@mui/material';
import { StyledForm } from './job-form.style';

function JobForm({ isNew }) {
	const [job, setJob] = useState(USER_MOCK_DATA[0] || EMPTY_FORM);
	const [isEdit, setIsEdit] = useState(isNew);
	const userData = UserData.useUserContext()
	const setUserData = UserData.useSetUserContext();

	const onSubmit = () => {		
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
			<Grid 
				container 
				rowSpacing={3} 
				columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 6 }}
			>
				<Position
					position={job.position}
					name="position"
					isEdit={isEdit}
					handleChangeForm={handleChangeForm}
				/>
				<Contact
					contact={job.contact}
					isEdit={isEdit}
					handleChangeForm={handleChangeForm}
				/>
				<Company
					company={job.company}
					handleChangeForm={handleChangeForm}
					isEdit={isEdit}
				/>
				<Interview
					interview={job.interview}
					followUp={job.followUp}
					isEdit={isEdit}
					handleChangeForm={handleChangeForm}
				/>
				<MiscFields
					applicationStatus={job.applicationStatus}
					isEdit={isEdit}
					handleChangeForm={handleChangeForm}
				/>
			</Grid>
			<FormButtons
				isNew={isNew}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				onSubmit={onSubmit}
				// jobId={}
			/>
		</StyledForm>
	);
}

export default JobForm;
