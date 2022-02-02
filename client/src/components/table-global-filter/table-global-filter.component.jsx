import React from 'react';

function TableGlobalFilter({ filter, setFilter }) {
	return (
		<div>
			search {" "}
			<input 
				defaultValue={filter || ""}
				onChange={(event) => setFilter(event.target.value)}
			/>
		</div>
	);
}

export default TableGlobalFilter;
