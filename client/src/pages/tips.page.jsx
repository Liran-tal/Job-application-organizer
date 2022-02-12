import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function TipsPage() {
	return (
		<Box
			sx={{
				height: "90%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography
				variant='h2'
			>
				Coming Soon to Web Pages Near You!
			</Typography>
		</Box>
	)
}

export default TipsPage