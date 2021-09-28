import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#6c63ff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    subText: {
      main: grey[600]
    }
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
});

export default theme;
