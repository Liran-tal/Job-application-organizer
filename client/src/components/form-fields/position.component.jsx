import React from 'react';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import DateTimeWidget from '../data-time-picker/date-time-picker.component'

function Position({ position, handleChangeForm }) {

	const handleChange = (target) => {
		console.log(target.value);
		position = {
			...position,
			[target.name]: target.value
		}
		console.log("in component", position);
		
		handleChangeForm(position, "position");
	}
	
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
						name='title'
						type="text"
						required
						label="Title"
						defaultValue={position.title}
						variant="standard"
						onChange={({target}) => handleChange(target)}
						// helperText="Position Title is requiered"
				/>
				<TextField
						name="description"
						type="text"
						label="Description"
						defaultValue={position.description}
						onChange={({target}) => handleChange(target)}
						multiline
          	rows={4}
				/>
				<DateTimeWidget 
					name="dateApplied"
					onChange={({target}) => handleChange(target)}
					required 
					label={"Date Applied"}
					date={position.dateApplied} 
				/>
			</Stack>
	);
}

export default Position;
