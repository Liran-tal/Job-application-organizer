import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import FeaturedTable from '../components/featured-table/featured-table.component';
import FormPopup from '../components/form-popup/form-popup';
import * as UserData from '../providers/user-data/user-data.context';
import { EMPTY_FORM } from '../consts/user-schema/user-schema';

function UserPage() {
	const userData = UserData.useUserContext();
	const [jobsForTable, setJobsForTable] = useState(userData?.applications || []);
	const [jobData, setJobData] = useState(null);
	const [isShowForm, setIsShowForm] = useState(false);
	let navigate = useNavigate();

	useEffect(() => {
		if (userData) {
			console.log(userData.applications);
			setJobsForTable(userData.applications);
		}
		else {
			navigate('/');
		}
	}, [userData, navigate]);
	
	const handleRowSelect = (row) => {
		setJobData(row);
		setIsShowForm(true);
	}

	const handleNewApplication = () => {
		setJobData(null);
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
					jobsData={jobsForTable}
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
