import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import { Theme } from '../../styles/theme.style';
import { handleJobDelete } from '../../utils/form-utils';

function FormButtons({ isNew, isEdit, setIsEdit, onSubmit, setIsShowForm }) {
	// let navigate = useNavigate();
	console.log(isEdit, isNew);

	const onClickSave = () => {
		if (isEdit) {
			onSubmit();
		}  
		setIsEdit(false);
	}

	return (
		<Container>
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
