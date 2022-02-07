import React from 'react';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DateTimeWidget from '../data-time-picker/date-time-picker.component'
import { INTERVIEW_FORMATS } from '../../consts/form-fields/form-fields.consts'

function Interview({ interview, handleChangeForm }) {

	const handleChange = (target) => {
		console.log(target.value);
		interview = {
			...interview,
			[target.name]: target.value
		}
		console.log("in component", interview);
		
		handleChangeForm(interview, "interview");
	}

	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
		>
			<Typography variant="h5" gutterBottom component="div">
				Interview
			</Typography>
			<DateTimeWidget
				name="date"
				handleChange={handleChange}
				label={"Date of Next Interview"}
				date={interview.date}
			/>
			<TextField
				name="format"
				onChange={({target}) => handleChange(target)}
				select
				label="Interview Format"
				value={interview.format}
				helperText="Please Select Interview Format"
				variant="standard"
			>
				{INTERVIEW_FORMATS.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		</Stack>
	);
}

export default Interview;
