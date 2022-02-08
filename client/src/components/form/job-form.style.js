import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Theme } from '../../styles/theme.style';

export const StyledForm = styled(Box, Theme, {
	name: "FormContainer",
	slot: "Box"
}) (() => ({
	minHeight: "100%",
	maxWidth: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "center",
	padding: "2rem",
	margin: "2rem",
	border: `1px solid ${Theme.palette.secondary.light}`,
	borderRadius: "15px"
}));