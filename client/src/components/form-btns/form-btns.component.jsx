import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Theme } from '../../styles/theme.style';
import { useNavigate } from 'react-router-dom';

function FormButtons(props) {
	const [message, setMessage] = useState(null);
	const { isNew, isEdit, setIsEdit, onSubmit, setIsShowForm, onDelete } = props;
	let navigate = useNavigate();
	
	useEffect(() => {
		setMessage('');
	}, [isEdit]);

	const onClickSave = async (event) => {
		
		if (isEdit) {
			try {
				await onSubmit();
				setMessage("Saved Successfuly!");
				setIsEdit(false);
				return;
			} catch (error) {
				setMessage("Oops! Somthing went wrong! try again later");
			}
		}
		setIsEdit(true);
	}

	const onClickDelete = () => {
		if (isNew) {
			setIsShowForm(false);
			return;
		}
		try {
			onDelete();
			navigate('/user');
		} catch (error) {
			setMessage("Oops! Somthing went wrong! try again later");
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
					type='submit'
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
