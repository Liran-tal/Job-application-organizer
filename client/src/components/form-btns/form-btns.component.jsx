import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Theme } from '../../styles/theme.style';
import { handleJobDelete } from '../../utils/form-utils';

function FormButtons({ isNew, isEdit, setIsEdit, onSubmit, setIsShowForm }) {
	console.log(isEdit, isNew);
	const [message, setMessage] = useState(null);

	const onClickSave = async () => {
		if (isEdit) {
			await onSubmit();
			setMessage("Saved Successfuly!");
			setIsEdit(false);
		}  
		setIsEdit(true);
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
					onClick={({ target }) => handleJobDelete(target)}
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
					onClick={() => setIsShowForm(false)}
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
