import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Theme } from '../../styles/theme.style';



export const StyledTableContainer = styled(TableContainer, Theme, {
	name: "TableContainer",
	slot: "TableContainer"
}) (() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "2rem",
	width: "100%",
}));

export const StyledTable = styled(Table, Theme, {
	name: "Table",
	slot: "Table"
}) (() => ({
	width: "100%",
	cursor: "pointer",
	alignSelf: "flex-start"
}));

export const StyledTHead = styled(TableHead, Theme, {
	name: "thead",
	slot: "TableHead"
}) (() => ({
	width: "100%",
}));

export const StyledTBody = styled(TableBody, Theme, {
	name: "tbody",
	slot: "TableBody"
}) (() => ({
	width: "100%"
}));

export const StyledTRow = styled(TableRow, Theme, {
	name: "tr",
	slot: "TableRow"
}) ((props) => ({
	width: "100%",
	backgroundColor: `${props.index % 2 === 0 
		? Theme.palette.secondary.light 
		: Theme.palette.secondary.main}`
}));

export const StyledTCell = styled(TableCell, Theme, {
	name: "Td",
	slot: "TableCell"
}) (() => ({
	textAlign: "center",
	border: "1px solid #fff"
}));

export const StyledTHeadRow = styled(TableRow, Theme, {
	name: "tr",
	slot: "TableHeader"
}) (() => ({
	width: "100%",
	backgroundColor: Theme.palette.primary.dark,
	color: "white",
	"th": {
		paddingTop: "1rem",
		paddingBottom: "1rem",
	} 
}));