import React from 'react';

function TableNav({ 
	previousPage,
	canPreviousPage,
	pageIndex,
	pageOptions,
	nextPage,
	canNextPage, 
}) {
	return (
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
	);
}

export default TableNav;
