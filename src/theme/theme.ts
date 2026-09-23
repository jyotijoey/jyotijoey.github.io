import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7CFF6B",
    },
    background: {
      default: "#0B0D10",
      paper: "#111418",
    },
  },

  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    h1: {
      fontWeight: 800,
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
    },

    h5: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;