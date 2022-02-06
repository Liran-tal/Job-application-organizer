import React from 'react';
import * as Style from './table-nav.style';

function TableNav({ 
	previousPage,
	canPreviousPage,
	pageIndex,
	pageOptions,
	nextPage,
	canNextPage, 
}) {
	return (
		<Style.TableNavWrapper>
			<Style.TablePageIndexBtn 
				onClick={previousPage}
				disabled={!canPreviousPage}
			>
				Previous
			</Style.TablePageIndexBtn>
			<Style.TablePageIdx variant="h6">
					{pageIndex + 1} / {pageOptions.length}				
			</Style.TablePageIdx>
			<Style.TablePageIndexBtn 
				onClick={nextPage}
				disabled={!canNextPage}
			>
				Next
			</Style.TablePageIndexBtn>
		</Style.TableNavWrapper>
	);
}

export default TableNav;
