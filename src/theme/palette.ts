import { PaletteOptions } from '@mui/material';
import {
  FONT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND,
} from '../consts/colors';
import { CSSProperties } from 'react';

export const palette: PaletteOptions = {
  primary: {
    main: PRIMARY_COLOR,
  },
  text: {
    primary: FONT_COLOR,
  },
  secondaryBackground: SECONDARY_BACKGROUND,
};

declare module '@mui/material/styles' {
  interface Palette {
    secondaryBackground: CSSProperties['color'];
  }
  interface PaletteOptions {
    secondaryBackground: CSSProperties['color'];
  }
}
