import React, { useEffect, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { usePagination, useTable } from 'react-table';
import BasicTable from '../components/basic-table/basic-table.component';
import { COLUMNS } from '../consts/columns/columns.const';
import MOCK_DATA from '../USER_MOCK_DATA.json'
import { Theme } from '../styles/theme.style';

function HomePage() {

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		page,
		setPageSize
	} = useTable(
		{
			columns,
			data
		},
		usePagination,
	);
	
	useEffect (() => {
		setPageSize(5);
	}, []);

	return (
		<Box
			sx={{
				height: "80%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: "2rem"
			}}
		>
			<Typography
				variant='h5'
				sx={{
					color: Theme.palette.complementary
				}}
			>
				Organize your job applications wherever you go!
			</Typography>
			<BasicTable page={page}/>
		</Box>
	);
}

export default HomePage;
