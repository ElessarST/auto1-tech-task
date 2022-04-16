import { FONT_COLOR, PRIMARY_PRESSED_COLOR } from '../consts/colors';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { Theme } from '@mui/material';

export const MuiButton: {
  styleOverrides: ComponentsOverrides<Theme>['MuiButton'];
} = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
    contained: {
      width: 128,
      height: 32,
      '&:hover': {
        backgroundColor: PRIMARY_PRESSED_COLOR,
      },
    },
    containedPrimary: {
      color: 'white',
    },
    textSecondary: {
      color: FONT_COLOR,
    },
  },
};
