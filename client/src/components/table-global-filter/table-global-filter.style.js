import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Theme } from '../../styles/theme.style';


export const StyledTextField = styled(TextField, Theme, {
	name: "StyledTextField",
	slot: "TextField"
}) (() => ({
	marginBottom: "2rem",
	borderRadius: "10px",
	'& label.Mui-focused': {
    color: Theme.palette.accent.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: Theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: Theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: Theme.palette.primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: Theme.palette.accent.main,
    },
  },
}))