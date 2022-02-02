import { DateTime } from "luxon"

export const COLUMNS = [
	{
		Header: 'Id',
		accessor: 'id'
	},
	{
		Header: 'First Name',
		accessor: 'first_name'
	},
	{
		Header: 'Last Name',
		accessor: 'last_name'
	},
	{
		Header: 'Email',
		accessor: 'email'
	},
	{
		Header: 'Date of Birth',
		accessor: 'date_of_birth',
		Cell: ({ value }) => DateTime.fromISO(value).toLocaleString()
	},
	{
		Header: 'Age',
		accessor: 'age'
	},
	{
		Header: 'Country',
		accessor: 'country'
	},
	{
		Header: 'Phone Number',
		accessor: 'phone'
	}
]