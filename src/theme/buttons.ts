import { FONT_COLOR } from '../consts/colors';
import { ComponentsOverrides } from '@mui/material/styles/overrides';
import { Theme } from '@mui/material';

export const MuiButton: {
  styleOverrides: ComponentsOverrides<Theme>['MuiButton'];
} = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
    textSecondary: {
      color: FONT_COLOR,
    },
  },
};
