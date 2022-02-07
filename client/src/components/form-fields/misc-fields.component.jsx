import React from 'react';
import { Stack } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { 
	FOLLOW_UP_OPS,
	APPLICATION_STATUS_OPS
} from '../../consts/form-fields/form-fields.consts'

function MiscFields({ followUp, applicationStatus, handleChangeForm }) {

	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
		>
			<TextField
				select
				name="followUp"
				onChange={({target}) => handleChangeForm(target.value, target.name)}
				label="Follow-Up Format"
				value={followUp}
				helperText="Please Select Follow-up Format"
				variant="standard"
			>
				{FOLLOW_UP_OPS.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
			<TextField
				name="applicationStatus"
				onChange={({target}) => handleChangeForm(target.value, target.name)}
				select
				label="Application Status"
				value={applicationStatus}
				helperText="Please Select Application Status"
				variant="standard"
			>
				{APPLICATION_STATUS_OPS.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		</Stack>
	);
}

export default MiscFields;
