
import { styled } from '@mui/system';
import { Theme } from '../../styles/theme.style';
import { Grid } from '@mui/material';

export const StyledItem = styled(Grid, Theme, {
	name: "GridItem",
	slot: "Grid"
}) (() => ({
	'&.Mui-disabled': {
		borderColor: Theme.palette.primary.light,
		color: Theme.palette.primary.dark
	},
}));