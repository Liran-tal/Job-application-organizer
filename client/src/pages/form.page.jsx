import React from 'react'

function FormPage() {

	return (
	<pre>
				<code>
					{JSON.stringify(
						{
							'selectedFlatRows[].original': selectedFlatRows.map(
								d => d.original
							),
						},
						null,
						2
					)}
				</code>
			</pre>
	)
}

export default FormPage