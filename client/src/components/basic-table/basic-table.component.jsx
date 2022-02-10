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


function BasicTable({ page, handleRowSelect }) {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);
	const { 
		getTableProps, 
		getTableBodyProps, 
		prepareRow, 
		headerGroups, 
	} = useTable(
		{ columns, data }, 
		useSortBy, 
		usePagination, 
		useRowSelect
	);

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
				onClick={() => handleRowSelect(row.original)}
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
		</StyledTableContainer>

	);
}

export default BasicTable;
