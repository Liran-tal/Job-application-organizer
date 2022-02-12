import { Box } from '@mui/material'
import React, { useState } from 'react'
import * as axios from '../api/Axios.Api'
import * as UserData from '../providers/user-data/user-data.context';
import CreateNewUser from '../components/login-create-new/create-new-user.component'
import LoginComponent from '../components/login-create-new/login.component'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
	// const userData = UserData.useUserContext()
	const setUserData = UserData.useSetUserContext();
	const [errorMessage, setErrorMessage] = useState(null);
	let navigate = useNavigate()

	const submitLogin = async (email, password) => {
		try {
			const {data} = await axios.loginUser(email, password);
			console.log(data);
			setUserData(data);
			navigate('/');
		} catch (error) {
			setErrorMessage(errorMessage);
		}
	};

	const submitCreateUser = async (userName, email, password) => {
		try {
			const user = await axios.addUser({
				name: userName,
				email: email,
				password: password,
				applications: [],
			});
			setUserData(user);
			navigate('/');
		} catch (error) {
			setErrorMessage(errorMessage);
		}
	};


	return (
		<Box
			sx={{
				height: "80%",
				width: "40%",
				margin: "auto",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-between",
				alignItems: "flex-start",
				padding: "2rem"
			}}
		>
			<LoginComponent submitLogin={submitLogin} />
			{errorMessage && <div>{errorMessage}</div>}
			<CreateNewUser submitCreateUser={submitCreateUser} />
		</Box>
	)
}

export default LoginPage