
import { styled } from '@mui/system';
import { Theme } from '../../styles/theme.style';
import { Grid } from '@mui/material';

export const StyledItem = styled(Grid, Theme, {
	name: "GridItem",
	slot: "Grid"
}) (() => ({
	width: "100%",
	margin: "2rem",

	"textField": {
		width: "100%"
	}
}));