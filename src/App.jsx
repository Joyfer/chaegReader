import React, { useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Routes from "./router/index";
import Container from "@mui/material/Container";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { red } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
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
            main: grey[600],
          },
        },
        typography: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
        },
      }),
    [prefersDarkMode]
  );

  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Container>
  );
}

export default App;
