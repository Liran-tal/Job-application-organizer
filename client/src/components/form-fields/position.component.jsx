import React from 'react';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import DateTimeWidget from '../data-time-picker/date-time-picker.component'

function Position(position) {
	return (
		<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
			>
				<Typography variant="h5" gutterBottom component="div">
					Position:
				</Typography>
				<TextField
						type="text"
						required
						label="Title"
						defaultValue={position.title}
						variant="standard"
						// helperText="Position Title is requiered"
				/>
				<TextField
						type="text"
						label="Description"
						defaultValue={position.description}
						multiline
          	rows={4}
				/>
				<DateTimeWidget 
					required 
					label={"Date Applied"}
					date={position.dateApplied} 
				/>
			</Stack>
	);
}

export default Position;
