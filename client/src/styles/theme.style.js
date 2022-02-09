import { grey, lightGreen, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
	palette: {
    primary: {
      main: teal[700],
    },
    secondary: {
      main: grey[400],
    },
    accent: {
      light: lightGreen[700], 
      main: lightGreen[800],
      dark: lightGreen[900],
    },
    complementary: '#96000f',
  },
});