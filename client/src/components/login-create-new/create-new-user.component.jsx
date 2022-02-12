import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'

function CreateNewUser(submitCreateUser) {

	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = ({ target }) => {
		switch (target.name) {
			case "name":
				setUserName(target.value);
				return;
			case "email":
				setEmail(target.value);
				return;
			case "password":
				setPassword(target.value);
				return;
			default:
				return;
		}
	}

	const handleSubmit = () => {
		submitCreateUser(userName, email, password);
	}

	return (
		<Stack
			height={"80%"}
			direction="column"
			justifyContent="space-between"
			alignItems="center"
			spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
			component="form"
			ml={{ sm: 1, md: 2, lg: 4, xl: 6 }}
		>
			<Typography variant="h5" gutterBottom component="div">
				Or Sign Up!
			</Typography>
			<TextField
				name='name'
				type="text"
				required
				label="Your Name"
				value={userName}
				variant="standard"
				onChange={handleChange}
			/>
			<TextField
				name='email'
				type="email"
				required
				label="Email"
				value={email}
				variant="standard"
				onChange={handleChange}
			/>
			<TextField
				name='password'
				type="password"
				required
				label="Password"
				value={password}
				variant="standard"
				onChange={handleChange}
			/>
			<Button
				onClick={handleSubmit}
				variant="contained"
			>
				Sign Up
			</Button>
		</Stack>
	)
}

export default CreateNewUser