import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { APPLICATION_STATUS_OPS } from '../../consts/form-fields/form-fields.consts'

function MiscFields({ applicationStatus, handleChangeForm, isEdit }) {

	return (
		<Grid item xs={12} md={6} lg={4} >
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={{ sm: 1, md: 2, lg: 4, xl: 6 }}
			>
				<Typography variant="h5" gutterBottom component="div">
					Application Process
				</Typography>
				<TextField
					name="applicationStatus"
					onChange={({target}) => handleChangeForm(target.value, target.name)}
					select
					label="Application Status"
					value={applicationStatus}
					helperText="Please Select Application Status"
					variant="standard"
					InputProps={{
						readOnly: !isEdit,
					}}
				>
					{APPLICATION_STATUS_OPS.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</Stack>
		</Grid>
	);
}

export default MiscFields;
