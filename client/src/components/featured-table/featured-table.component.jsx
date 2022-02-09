import React, { useMemo } from 'react';
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
	useRowSelect
} from 'react-table';
import { StyledTableContainer } from './featured-table.style';
import { COLUMNS } from '../../consts/columns/columns.const';
import MOCK_DATA from '../../USER_MOCK_DATA.json'
import TableGlobalFilter from '../table-global-filter/table-global-filter.component';
import TableNav from '../table-nav/table-nav.component';
import BasicTable from '../basic-table/basic-table.component';

function FeaturedTable() {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		page,
		previousPage,
		canPreviousPage,
		nextPage,
		canNextPage,
		pageOptions,
		state,
		setGlobalFilter,
		selectedFlatRows
	} = useTable(
		{
			columns,
			data
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect
	);



	const { globalFilter, pageIndex, selectedRowIds } = state;
	// TODO: Destructure table to its own component and merge as user-table.page
	return (
		<StyledTableContainer>
			<TableGlobalFilter
				filter={globalFilter}
				setFilter={setGlobalFilter}
			/>
			<BasicTable 
				page={page}
			/>
			<TableNav
				previousPage={previousPage}
				canPreviousPage={canPreviousPage}
				pageIndex={pageIndex}
				pageOptions={pageOptions}
				nextPage={nextPage}
				canNextPage={canNextPage}
			/>

			<pre>
				<code>
					{JSON.stringify(
						{
							selectedRowIds: selectedRowIds,
							'selectedFlatRows[].original': selectedFlatRows.map(
								d => d.original
							),
						},
						null,
						2
					)}
				</code>
			</pre>
		</StyledTableContainer>
	);
}

export default FeaturedTable;
