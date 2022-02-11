import React from 'react';
import { Button, Container } from '@mui/material';
import { Theme } from '../../styles/theme.style';
import { handleJobDelete } from '../../utils/form-utils';

function FormButtons({ isNew, isEdit, setIsEdit, onSubmit, setIsShowForm }) {
	console.log(isEdit, isNew);

	const onClickSave = () => {
		if (isEdit) {
			onSubmit();
		}  
		setIsEdit(true);
	}

	return (
		<Container
			sx={{
				margin: "4rem auto 0",
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
	);
}

export default FormButtons;
