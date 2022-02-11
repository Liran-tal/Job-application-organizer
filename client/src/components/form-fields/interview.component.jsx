import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DateTimeWidget from '../data-time-picker/date-time-picker.component'
import { INTERVIEW_FORMATS } from '../../consts/form-fields/form-fields.consts'
import { FOLLOW_UP_OPS, } from '../../consts/form-fields/form-fields.consts'

function Interview({ interview, handleChangeForm, isEdit }) {
	const handleChange = (target) => {
		interview = {
			...interview,
			[target.name]: target.value
		}
		
		handleChangeForm(interview, "interview");
	}

	return (
		<Grid item xs={12} md={6} lg={4} >
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
					isEdit={isEdit}
				/>
				<TextField
					name="format"
					onChange={({target}) => handleChange(target)}
					select
					label="Interview Format"
					value={interview.format}
					helperText="Please Select Interview Format"
					variant="standard"
					InputProps={{
						readOnly: !isEdit,
					}}
				>
					{INTERVIEW_FORMATS.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					select
					name="followUp"
					onChange={({target}) => handleChange(target)}
					label="Follow-Up Format"
					value={interview.followUp}
					helperText="Please Select Follow-up Format"
					variant="standard"
					InputProps={{
						readOnly: !isEdit,
					}}
				>
					{FOLLOW_UP_OPS.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</Stack>
		</Grid>
	);
}

export default Interview;
