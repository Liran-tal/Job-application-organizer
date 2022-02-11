import React, { useMemo, useState } from 'react';
import {
	useTable,
	useGlobalFilter,
	usePagination,
} from 'react-table';
import { StyledTableContainer } from './featured-table.style';
import { COLUMNS } from '../../consts/columns/columns.const';
import MOCK_DATA from '../../USER_MOCK_DATA.json'
import TableGlobalFilter from '../table-global-filter/table-global-filter.component';
import TableNav from '../table-nav/table-nav.component';
import BasicTable from '../basic-table/basic-table.component';
import { Button } from '@mui/material';
import FormPopup from '../form-popup/form-popup';
import { EMPTY_FORM } from '../../consts/user-schema/user-schema';
import NewJobButton from '../new-job-btn/new-job-btn.component';

function FeaturedTable() {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);
	const [jobData, setjobData] = useState(null);
	const [isShowForm, setIsShowForm] = useState(false);

	const {
		page,
		previousPage,
		canPreviousPage,
		nextPage,
		canNextPage,
		pageOptions,
		state,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data
		},
		useGlobalFilter,
		usePagination,
	);

	const { globalFilter, pageIndex } = state;

	const handleRowSelect = (row) => {
		setjobData(row);
		setIsShowForm(true);
	}

	const handleNewApplication = () => {
		setjobData(EMPTY_FORM);
		setIsShowForm(true);
	}

	return (
		<StyledTableContainer>
			<div style={{ display: isShowForm ? "none" : "block" }} >
				<TableGlobalFilter
					filter={globalFilter}
					setFilter={setGlobalFilter}
				/>
				<BasicTable
					page={page}
					handleRowSelect={handleRowSelect}
				/>
				<TableNav
					previousPage={previousPage}
					canPreviousPage={canPreviousPage}
					pageIndex={pageIndex}
					pageOptions={pageOptions}
					nextPage={nextPage}
					canNextPage={canNextPage}
				/>
				<Button
					variant="contained"
					onClick={handleNewApplication}
				>
					New Application
				</Button>
			</div>
			<FormPopup
				jobData={jobData}
				isShowForm={isShowForm}
				setIsShowForm={setIsShowForm}
			/>
		</StyledTableContainer>
	);
}

export default FeaturedTable;
