import React, { useMemo } from 'react';
import {
	useTable,
	useSortBy,
	useRowSelect,
	usePagination
} from 'react-table';
import { 
	StyledTableContainer,
	StyledTable,
	StyledTHead,
	StyledTBody,
	StyledTRow,
	StyledTCell,
	StyledTHeadRow
} from '../featured-table/featured-table.style';
import { COLUMNS } from '../../consts/columns/columns.const';
import MOCK_DATA from '../../USER_MOCK_DATA.json'


function BasicTable({ page }) {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		prepareRow,
		headerGroups,
		state,
		selectedFlatRows
	} = useTable(
		{
			columns,
			data
		},
		useSortBy,
		usePagination,
		useRowSelect,
	);



	const { selectedRowIds } = state;
	// TODO: Destructure table to its own component and merge as user-table.page
	return (
		<StyledTableContainer>
			<StyledTable {...getTableProps()}>
				<StyledTHead>
					{headerGroups.map((headerGroup) => (
						<StyledTHeadRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span>
										{column.isSorted
											? (column.isSortedDesc
												? "\u25BE"
												: "\u25B4")
											: ""}
									</span>
								</th>
							))}
						</StyledTHeadRow>
					))}
				</StyledTHead>
				<StyledTBody {...getTableBodyProps()}>
					{page.map((row, index) => {
						prepareRow(row);
						return (
							<StyledTRow
								onClick={() => row.toggleRowSelected()}
								{...row.getRowProps({index: index})}
							>
								{row.cells.map((cell) => (
									<StyledTCell {...cell.getCellProps()}>
										{cell.render('Cell')}
									</StyledTCell>
								))}
							</StyledTRow>
						)
					})}
				</StyledTBody>
			</StyledTable>
			

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

export default BasicTable;
