import React, { useMemo } from 'react';
import { 
	useTable, 
	useSortBy, 
	useGlobalFilter, 
	usePagination 
} from 'react-table';
import { COLUMNS } from '../../consts/columns/columns.const';
import MOCK_DATA from '../../MOCK_DATA.json'
import TableGlobalFilter from '../table-global-filter/table-global-filter.component';

function Table() {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		previousPage,
		canPreviousPage,
		nextPage,
		canNextPage,
		pageOptions,
		state,
		setGlobalFilter
	} = useTable(
		{
			columns,
			data
		}, 
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const { globalFilter, pageIndex } = state;

	return (
		<>
			<TableGlobalFilter 
				filter={globalFilter}
				setFilter={setGlobalFilter}
			/>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
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
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td {...cell.getCellProps()}>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						)
					})}
				</tbody>
			</table>
			<div>
				<button 
					onClick={previousPage}
					disabled={!canPreviousPage}
				>
					Previous
				</button>
				<span>
					<strong>
						{pageIndex + 1} / {pageOptions.length}
					</strong>
				</span>
				<button 
					onClick={nextPage}
					disabled={!canNextPage}
				>
					Next
				</button>
			</div>
		</>
	);
}

export default Table;
