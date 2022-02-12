import { Box, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	

	return (
		<Box
			sx={{
				height: "80%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: "2rem"
			}}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
			>
				<Typography variant="h4" gutterBottom component="div">
					Login
				</Typography>
				<TextField
					name='email'
					type="email"
					required
					label="Email"
					value={email}
					variant="standard"
					onChange={({ target }) => handleChange(target)}
				/>
				<TextField
					name='password'
					type="password"
					required
					label="Password"
					value={password}
					variant="standard"
					onChange={({ target }) => handleChange(target)}
				/>
			</Stack>
		</Box>
	)
}

export default LoginPage