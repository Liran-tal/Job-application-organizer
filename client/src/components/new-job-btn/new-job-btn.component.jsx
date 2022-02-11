import { Button } from '@mui/material'
import React from 'react'

function NewJobButton({ setIsShowForm }) {
	return (
		<Button
			variant="contained"
			onClick={() => setIsShowForm(true)}
		>
			New Application
		</Button>
	)
}

export default NewJobButton