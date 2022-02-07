import React from 'react';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';


function Contact(contact) {
	return (
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
					required
					label="Name"
					defaultValue={contact.name}
					variant="standard"
					// helperText="Position Title is requiered"
			/>
			<TextField
					type="text"
					label="Position"
					defaultValue={contact.position}
					variant="standard"
			/>
			<TextField
					type="email"
					required
					label="Email Address"
					defaultValue={contact.email}
					variant="standard"
					/>
			<TextField
					type="text"
					label="Phone Number"
					defaultValue={contact.phone}
					variant="standard"
					helperText="Enter In Format: xxx-xxx-xxxx"
			/>
		</Stack>
	);
}

export default Contact;
