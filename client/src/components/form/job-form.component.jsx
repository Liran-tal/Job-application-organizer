import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Position from '../form-fields/position.component';
import Company from '../form-fields/company.component';
import Contact from '../form-fields/contact.component';
import Interview from '../form-fields/interview.component';
import MiscFields from '../form-fields/misc-fields.component';
import FormButtons from '../form-btns/form-btns.component';
import * as UserData from '../../providers/user-data/user-data.context';
import { handleSubmit } from '../../utils/form-utils'
import { handleJobDelete } from '../../utils/form-utils';
import { StyledForm } from './job-form.style';

function JobForm({ jobData, isNew, setIsShowForm }) {

	const [job, setJob] = useState(jobData);
	const [isEdit, setIsEdit] = useState(isNew);
	const userData = UserData.useUserContext()
	const setUserData = UserData.useSetUserContext();

	const onSubmit = async () => {
		try {
			const updatedJobs = await handleSubmit(userData, job);
			console.log(updatedJobs);
			if (updatedJobs) {
				setUserData({
					...userData,
					applications: updatedJobs
				})
			}
		} catch (error) {
			throw error;
		}
	};

	const onDelete = async () => {
		if (job._id) {
			try {
				const updatedJobs = await handleJobDelete(userData, job._id);
				if (updatedJobs) {
					setUserData({
						...userData,
						applications: updatedJobs
					})
				}
			} catch (error) {
				throw error;
			}
		}
	}

	useEffect(() => {
		setJob(jobData);
		setIsEdit(isNew);
	}, [jobData, isNew])

	const handleChangeForm = (component, componentName) => {
		setJob({ ...job, [componentName]: component });
	};

	return (
		<StyledForm
			onSubmit={onSubmit}
			component="form"
			autoComplete="off"
		>
			{/* TODO: move grid to separate component */}
			<Grid
				container
				rowSpacing={3}
				columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 6 }}
			>
				<Position
					position={job.position}
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
				setIsShowForm={setIsShowForm}
				onDelete={onDelete}
			/>
		</StyledForm>
	);
}

export default JobForm;
