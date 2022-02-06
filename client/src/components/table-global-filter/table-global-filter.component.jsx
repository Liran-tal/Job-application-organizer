import React from 'react';
import {StyledTextField} from './table-global-filter.style'

function TableGlobalFilter({ filter, setFilter }) {
	return (
		<StyledTextField 
			label="search" 
			variant="outlined" 
			defaultValue={filter || ""}
			onChange={(event) => setFilter(event.target.value)}
		/>
	);
}

export default TableGlobalFilter;
