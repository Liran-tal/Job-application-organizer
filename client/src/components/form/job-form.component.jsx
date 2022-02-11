import React, { useEffect, useState } from 'react';
import { EMPTY_FORM } from '../../consts/user-schema/user-schema';
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

function JobForm({ jobData, isNew, setIsShowForm }) {
	
	const [job, setJob] = useState(EMPTY_FORM);
	const [isEdit, setIsEdit] = useState(isNew);
	const userData = UserData.useUserContext()
	const setUserData = UserData.useSetUserContext();

	const onSubmit = () => {
		handleSubmit(userData, setUserData, job, isNew);
	};

	useEffect(() => {
		if (jobData) setJob(jobData)
	}, [jobData])

	const handleChangeForm = (component, componentName) => {
		setJob({...job, [componentName]: component});
	};



	return (
		<>
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
				{/* {job.position.title &&  */}
				<Position
					position={job.position}
					name="position"
					isEdit={isEdit}
					handleChangeForm={handleChangeForm}
					/>
				{/* }
				{job.position.title &&  */}
				<Contact
					contact={job.contact}
					isEdit={isEdit}
					handleChangeForm={handleChangeForm}
					/>
				{/* }
				{job.position.title &&  */}
				<Company
					company={job.company}
					handleChangeForm={handleChangeForm}
					isEdit={isEdit}
				/>
				{/* }
				{job.position.title && */}
					<Interview
						interview={job.interview}
						isEdit={isEdit}
						handleChangeForm={handleChangeForm}
						/>
				{/* }
				{job.position.title &&  */}
				<MiscFields
					applicationStatus={job.applicationStatus}
					isEdit={isEdit}
					handleChangeForm={handleChangeForm}
					/>
				{/* } */}
			</Grid>
			<FormButtons
				isNew={isNew}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				onSubmit={onSubmit}
				setIsShowForm={setIsShowForm}
				// jobId={job._id}
				/>
		</StyledForm>
		<pre>
			{JSON.stringify(job, null, 2)}
		</pre>
		</>
	);
}

export default JobForm;
