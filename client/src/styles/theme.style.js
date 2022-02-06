import { grey, lightGreen, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
	palette: {
    primary: {
      main: teal[600],
    },
    secondary: {
      main: grey[400],
    },
    accent: {
      main: lightGreen[800],
    },
    complementary: '#96000f',
  },
});