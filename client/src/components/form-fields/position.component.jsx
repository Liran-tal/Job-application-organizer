import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import DateTimeWidget from '../data-time-picker/date-time-picker.component'

function Position({ position, handleChangeForm, isEdit }) {

	const handleChange = (target) => {
		position = {
			...position,
			[target.name]: target.value
		}
		handleChangeForm(position, "position");
	}
	
	return (
		<Grid item xs={12} md={6} >
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
						InputProps={{
							readOnly: !isEdit,
						}}
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
						InputProps={{
							readOnly: !isEdit,
						}}
				/>
				<DateTimeWidget 
					name="dateApplied"
					handleChange={handleChange}
					required 
					label={"Date Applied"}
					date={position.dateApplied} 
					isEdit={isEdit}
				/>
			</Stack>
		</Grid>
	);
}

export default Position;
