import React from 'react';
import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { 
	FOLLOW_UP_OPS,
	APPLICATION_STATUS_OPS
} from '../../consts/form-fields/form-fields.consts'

function MiscFields({ followUp, applicationStatus }) {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
		>
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

export default MiscFields;
