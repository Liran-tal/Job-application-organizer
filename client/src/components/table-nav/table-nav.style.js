import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Theme } from '../../styles/theme.style';

export const TableNavWrapper = styled(Box, Theme, {
	name: "table-nav-wrapper",
	slot: "Box"
}) (() => ({
	width: "40%",
  margin: "auto",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	marginTop: "2rem"
}));

export const TablePageIndexBtn = styled(Button, Theme, {
	name: "page-nav-btn",
	slot: "Button"
}) (() => ({
	boxShadow: 'none',
  textTransform: 'none',
  padding: '0.5rem',
	margin: "0 1rem",
  border: '1px solid',
	borderRadius: "15px",
  lineHeight: 1.5,
  '&:hover': {
    backgroundColor: Theme.palette.primary.light,
    borderColor: Theme.palette.primary.main,
    color: "#fff",
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: Theme.palette.primary.light,
    borderColor: Theme.palette.primary.dark,
  },
  '&:disabled': {
    display: "hide"
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));

export const TablePageIdx = styled(Typography, Theme, {
	name: "table-page-idx",
	slot: "Typography"
}) (() => ({
	color: Theme.palette.primary.dark,
}));