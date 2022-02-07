import React from 'react';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

function Company({ company, handleChangeForm }) {

	const handleChange = (target) => {
		console.log(target.value);
		company = {
			...company,
			[target.name]: target.value
		}
		console.log("in component", company);
		
		handleChangeForm(company, "company");
	}

	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
		>
			<Typography variant="h5" gutterBottom component="div">
				Company
			</Typography>
			<TextField
					type="text"
					name="name"
					onChange={({target}) => handleChange(target)}
					required
					label="Name"
					defaultValue={company.name}
					variant="standard"
					// helperText="Position Title is requiered"
			/>
			<TextField
					type="text"
					name="location"
					onChange={({target}) => handleChange(target)}
					label="Location"
					defaultValue={company.location}
					variant="standard"
			/>
		</Stack>
	);
}

export default Company;
