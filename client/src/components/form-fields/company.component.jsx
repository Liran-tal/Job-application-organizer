import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

function Company({ company, handleChangeForm, isEdit }) {

	const handleChange = (target) => {
		company = {
			...company,
			[target.name]: target.value
		}		
		handleChangeForm(company, "company");
	}

	return (
		<Grid item xs={12} md={6} lg={4}>
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
						InputProps={{
							readOnly: !isEdit,
						}}
						// helperText="Position Title is requiered"
				/>
				<TextField
						type="text"
						name="location"
						onChange={({target}) => handleChange(target)}
						label="Location"
						defaultValue={company.location}
						variant="standard"
						InputProps={{
							readOnly: !isEdit,
						}}
				/>
			</Stack>
		</Grid>
	);
}

export default Company;
