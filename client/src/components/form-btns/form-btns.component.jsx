import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import { Theme } from '../../styles/theme.style';
import { handleJobDelete } from '../../utils/form-utils';

function FormButtons(isNew, isEdit, setIsEdit) {
	let navigate = useNavigate();
	
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
			>
				{isEdit ? "Save" : "Edit"}
			</Button>
			<Button
				name="return"
				variant="contained"
				onClick={() => navigate('/user')}
			>
				{isEdit ? "Save" : "Edit"}
			</Button>
		</Container>
	);
}

export default FormButtons;
