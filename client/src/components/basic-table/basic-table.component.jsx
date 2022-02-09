import React, { useMemo } from 'react';
import {
	useTable,
	useSortBy,
	useRowSelect,
	usePagination,
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


function BasicTable({ page, isUser }) {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const { getTableProps, getTableBodyProps, prepareRow, headerGroups, selectedFlatRows, state } = useTable({ columns, data }, useSortBy, usePagination, useRowSelect);

	const { selectedRowIds } = state;

	const handleRowSelect = (row) => {
		console.log(row)
		if (!isUser) {
			return;
		}
		row.toggleRowSelected()
		// console.log(JSON.stringify(
		// 	{
		// 		selectedRowIds: selectedRowIds,
		// 		'selectedFlatRows[].original': selectedFlatRows.map(
		// 			d => d.original
		// 		),
		// 	},
		// 	null,
		// 	2
		// ))
		console.log(selectedFlatRows.map(d => d.original));

	}

	const renderHeaders = (headerGroup) => (
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
	)



	const renderBody = (row, index) => {
		prepareRow(row);
		return (
			<StyledTRow
				onClick={() => handleRowSelect(row)}
				{...row.getRowProps({ index: index })}
			>
				{row.cells.map((cell) => (
					<StyledTCell {...cell.getCellProps()}>
						{cell.render('Cell')}
					</StyledTCell>
				))}
			</StyledTRow>
		)
	}

	const renderDataAsJson = () => {
		return JSON.stringify(
			{
				selectedRowIds: selectedRowIds,
				'selectedFlatRows[].original':
					selectedFlatRows.map((d) => d.original),
			}, null, 2)
	}

	// TODO: Destructure table to head and body 
	return (
		<StyledTableContainer>
			<StyledTable {...getTableProps()}>
				<StyledTHead>
					{headerGroups.map(renderHeaders)}
				</StyledTHead>
				<StyledTBody {...getTableBodyProps()}>
					{page.map(renderBody)}
				</StyledTBody>
			</StyledTable>
			<pre>
				<code>
					{renderDataAsJson()}
				</code>
			</pre>
		</StyledTableContainer>

	);
}

export default BasicTable;
