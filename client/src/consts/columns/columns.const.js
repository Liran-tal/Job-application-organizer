import { format } from "date-fns";
export const COLUMNS = [
	{
		Header: 'Position Title',
		accessor: 'position.title'
	},
	{
		Header: 'Date Applied',
		accessor: 'position.dateApplied',
		Cell: ({ value }) => format(new Date(value, 'dd/mm/yyyy'))
	},
	{
		Header: 'Company Name',
		accessor: 'company.name'
	},
	{
		Header: 'Company Location',
		accessor: 'company.location'
	},
	{
		Header: 'Contact Name',
		accessor: 'contact.name'
	},
	{
		Header: 'Contact Email Address',
		accessor: 'contact.email'
	},
	{
		Header: 'Contact Phone Number',
		accessor: 'contact.phone'
	},
	{
		Header: 'Next Interview Date',
		accessor: 'interview.date',
		Cell: ({ value }) => {
			if (value) {
				return format(new Date(value, 'dd/mm/yyyy'));
			}
			return "";
		}
	},
	{
		Header: 'Next Interview Format',
		accessor: 'interview.format',
	},
	{
		Header: 'Follow-Up Format',
		accessor: 'followUp'
	},
	{
		Header: 'Status',
		accessor: 'applicationStatus'
	},
]