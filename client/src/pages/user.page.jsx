import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import * as axios from '../api/Axios.Api';
import FeaturedTable from '../components/featured-table/featured-table.component';
import FormPopup from '../components/form-popup/form-popup';
import * as UserData from '../providers/user-data/user-data.context';
import { EMPTY_FORM } from '../consts/user-schema/user-schema';
import MOCK_DATA from '../USER_MOCK_DATA.json';

function UserPage() {
	const userData = UserData.useUserContext()
	const setUserData = UserData.useSetUserContext();
	const [jobsForTable, setJobsForTable] = useState(null);
	const [jobData, setJobData] = useState(null);
	const [isShowForm, setIsShowForm] = useState(false);
	let navigate = useNavigate();

	useEffect(() => {
		// const fetchUserJobs = async () => {
		// 	try {
		// 		const { data } = axios.getJobs()
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// }

		if (userData) {
			// fetchUserJobs();
			setJobsForTable(userData.applications);
		}
		else {
			navigate('/');
		}
	}, [userData, navigate])
	
	const handleRowSelect = (row) => {
		setJobData(row);
		setIsShowForm(true);
	}

	const handleNewApplication = () => {
		setJobData(EMPTY_FORM);
		setIsShowForm(true);
	}

	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "2rem"
			}}
		>
			<Box style={{ display: isShowForm ? "none" : "block" }} >
				<FeaturedTable
					jobsData={jobsForTable || MOCK_DATA}
					handleRowSelect={handleRowSelect}
				/>
				<Button
					variant="contained"
					onClick={handleNewApplication}
				>
					New Application
				</Button>
			</Box>
			<FormPopup
				jobData={jobData || EMPTY_FORM}
				isShowForm={isShowForm}
				setIsShowForm={setIsShowForm}
			/>
		</Box>
	)
}

export default UserPage