import { createTheme } from '@mui/material';
import { MuiButton } from './buttons';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton,
  },
});
