import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Theme } from '../../styles/theme.style';
import { useNavigate } from 'react-router-dom';

const SUCCESS_MSG = "Saved Successfuly!";
const ERROR_MSG = "Oops! Something went wrong! try again later";

function FormButtons(props) {
	const { isNew, isEdit, setIsEdit, onSubmit, setIsShowForm, onDelete } = props;
	const [message, setMessage] = useState(null);
	let navigate = useNavigate();
	
	useEffect(() => {
		setMessage('');
	}, [isEdit]);

	const onClickSave = async() => {
		if (isEdit) {
			try {
				await onSubmit();
				setMessage(SUCCESS_MSG);
				setIsEdit(false);
				return;
			} catch (error) {
				setMessage(ERROR_MSG);
			}
		}
		setIsEdit(true);
	}

	const onClickDelete = async () => {
		if (isNew) {
			setIsShowForm(false);
			return;
		}
		try {
			await onDelete();
			navigate('/user');
		} catch (error) {
			setMessage(ERROR_MSG);
		}
	}

	const onClickReturn = () => {
		setIsShowForm(false);
		navigate('/user');
	}

	return (
		<Container
			sx={{
				margin: "2rem auto",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Container
				sx={{
					margin: "2rem auto",
					width: "40%",
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center"
				}}
			>
				<Button
					name="delete"
					value={isNew}
					variant="contained"
					onClick={onClickDelete}
					sx={{
						backgroundColor: Theme.palette.complementary
					}}
				>
					{isNew ? "Discard" : "Delete"}
				</Button>
				<Button
					name="save"
					value={isEdit}
					variant="contained"
					onClick={onClickSave}
				>
					{isEdit ? "Save" : "Edit"}
				</Button>
				<Button
					name="return"
					variant="contained"
					onClick={onClickReturn}
					sx={{
						backgroundColor: Theme.palette.accent.main
					}}
				>
					Return
				</Button>
			</Container>
			<Typography variant="h5" gutterBottom component="div">
				{message}
			</Typography>
		</Container>
	);
}

export default FormButtons;
