import React from 'react';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DateTimeWidget from '../data-time-picker/date-time-picker.component'
import { INTERVIEW_FORMATS } from '../../consts/form-fields/form-fields.consts'

function Interview(interview) {
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
				label={"Date of Next Interview"}
				date={interview.date}
			/>
			<TextField
				select
				label="Select"
				value={interview.format}
				// onChange={handleChange}
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
