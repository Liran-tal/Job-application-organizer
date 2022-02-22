import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Theme } from '../../styles/theme.style';

function LoginComponent({ submitLogin }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = ({ target }) => {
		if (target.name === "email") {
			setEmail(target.value);
			return;
		}

		setPassword(target.value);
	}

	const onClickEnter = (event) => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		submitLogin(email, password);
	}

	return (
		<Stack
			height={"80%"}
			direction="column"
			justifyContent="space-between"
			alignItems="center"
			spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
			component="form"
			mr={{ sm: 1, md: 2, lg: 4, xl: 6 }}
		>
			<Typography variant="h5" gutterBottom component="div">
				Sign In!
			</Typography>
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
				name='loginPassword'
				type="password"
				required
				label="Password"
				value={password}
				variant="standard"
				onChange={handleChange}
				onKeyPress={onClickEnter}
			/>
			<Button
				onClick={handleSubmit}
				variant="contained"
				sx={{
					backgroundColor: Theme.palette.accent.main
				}}
			>
				Login
			</Button>
			
		</Stack>
	)
}

export default LoginComponent