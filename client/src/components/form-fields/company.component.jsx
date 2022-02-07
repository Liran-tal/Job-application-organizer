import React from 'react';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

function Company(company) {
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
					required
					label="Name"
					defaultValue={company.name}
					variant="standard"
					// helperText="Position Title is requiered"
			/>
			<TextField
					type="text"
					label="Location"
					defaultValue={company.location}
					variant="standard"
			/>
		</Stack>
	);
}

export default Company;
