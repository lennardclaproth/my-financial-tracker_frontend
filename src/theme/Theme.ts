import { createTheme } from "@mui/material/styles";
import selectionPalette from "./SelectionPalette";

const theme = createTheme({
  palette: {
    primary: {
    //   main: "#90a955",
      dark: "#132a13",
      main: "#31572c",
      light: "#4f772d",
    // main:"#064439",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ecf39e",
    //   main: "#e9d8a6ff",
    //   main: "#eee7ce",
    
      contrastText: "#132a13",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  gradient: {
    palette: {
      primary:
        "linear-gradient(90deg, rgba(58,134,255,1) 0%, rgba(131,56,236,1) 50%, rgba(255,190,11,1) 100%);",
    },
  },
  selectionPalette
});

export default theme;
