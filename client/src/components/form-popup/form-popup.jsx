import { Box } from '@mui/system'
import React from 'react'
import JobForm from '../form/job-form.component'

function FormPopup({ jobData, isShowForm, setIsShowForm }) {
	return (
		<Box
			sx={{
				display: isShowForm ? "block" : "none",
				width: "100%",
				height: "100%",
				zIndex: isShowForm ? 1000 : -1
			}}
		>
			<JobForm jobData={jobData} setIsShowForm={setIsShowForm}/>
		</Box>
	)
}

export default FormPopup