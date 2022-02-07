import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Theme } from '../../styles/theme.style';

export const StyledForm = styled(Box, Theme, {
	name: "FormContainer",
	slot: "Box"
}) (() => ({
	display: "flex",
	flexWrap: "row wrap",
	justifyContent: "space-around",
	alignItems: "center",
	padding: "2rem",
}));