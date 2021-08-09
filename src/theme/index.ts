import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    helperText: Palette['primary'];
  }
  interface PaletteOptions {
    helperText: PaletteOptions['primary'];
  }
}

const originalTheme = createTheme();

const colors = {
  palette: {
    ...originalTheme.palette,
    primary: {
      light: '#9B9FC5',
      main: '#37408B',
    },
    secondary: {
      main: '#9FD7CB',
    },
    text: {
      primary: '#363253',
      secondary: '#68657E',
    },
    helperText: {
      main: '#59585C',
    },
    action: {
      hover: '#EAF0F8',
    },
    background: {
      default: '#fafafa',
    },
  },
};

// A custom theme for this app
const theme = createTheme({
  ...colors,
  typography: {
    fontFamily: ['Nunito', 'Arial'].join(','),
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      color: colors.palette.text.primary,
    },
    h2: {
      fontSize: '40px',
      fontWeight: 700,
      color: colors.palette.text.primary,
    },
    h3: {
      fontSize: '32px',
      fontWeight: 700,
      color: colors.palette.text.primary,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
      color: colors.palette.text.primary,
    },
    h5: {
      fontSize: '18px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: colors.palette.text.primary,
    },
    h6: {
      fontSize: '18px',
      fontWeight: 600,
      color: colors.palette.text.primary,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 700,
      color: colors.palette.text.primary,
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: colors.palette.helperText.main,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      color: colors.palette.text.primary,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: colors.palette.text.primary,
    },
    button: {
      fontWeight: 600,
      fontSize: '16px',
      textTransform: 'uppercase',
      color: colors.palette.primary.main,
    },
    caption: {
      fontWeight: 400,
      fontSize: '12px',
      color: colors.palette.helperText.main,
    },
    overline: {
      fontWeight: 800,
      fontSize: '12px',
      textTransform: 'uppercase',
      color: colors.palette.helperText.main,
    },
  },
});

export default theme;
