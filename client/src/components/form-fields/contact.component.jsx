import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';


function Contact({ contact, handleChangeForm, isEdit }) {

	const handleChange = (target) => {
		contact = {
			...contact,
			[target.name]: target.value
		}
		handleChangeForm(contact, "contact");
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
					Contact
				</Typography>
				<TextField
						type="text"
						name="name"
						onChange={({target}) => handleChange(target)}
						required
						label="Name"
						defaultValue={contact.name}
						variant="standard"
						InputProps={{
							readOnly: !isEdit,
						}}
						// helperText="Position Title is requiered"
				/>
				<TextField
						type="text"
						name="position"
						onChange={({target}) => handleChange(target)}
						label="Position"
						defaultValue={contact.position}
						variant="standard"
						InputProps={{
							readOnly: !isEdit,
						}}
				/>
				<TextField
						type="email"
						name="email"
						onChange={({target}) => handleChange(target)}
						required
						label="Email Address"
						defaultValue={contact.email}
						variant="standard"
						InputProps={{
							readOnly: !isEdit,
						}}
						/>
				<TextField
						type="text"
						name="phone"
						onChange={({target}) => handleChange(target)}
						label="Phone Number"
						defaultValue={contact.phone}
						variant="standard"
						helperText="Enter In Format: xxx-xxx-xxxx"
						InputProps={{
							readOnly: !isEdit,
						}}
				/>
			</Stack>
		</Grid>
	);
}

export default Contact;
