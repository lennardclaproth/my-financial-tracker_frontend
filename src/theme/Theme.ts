import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import selectionPalette from "./SelectionPalette";

const theme = createTheme({
  typography:{
    fontFamily: ['Avenir','sans-serif'].join(','),
    fontWeightRegular: "500",
    fontSize: 14,
    h3:{
        fontFamily: ['Tiempos Headline'].join(','),
        fontWeight: "500",
        color: grey[800]
        // fontWeight: "100"
    },
    h4:{
        fontFamily: ['Tiempos Headline'].join(','),
        fontWeight: "500",
        color: grey[800]
        // fontWeight: "100"
    },
    h5:{
        fontFamily: ['Tiempos Headline'].join(','),
        fontWeight: "400",
        fontSize: "1.5rem",
        color: grey[800]
    },
    h6:{
        fontFamily: ['Tiempos Headline'].join(','),
        fontWeight: "200",
        fontSize: "1rem"
    },
    subtitle1: {
        fontFamily: ['avenir'].join(','),
        fontWeight: "800",
    }
  },
  palette: {
    text: {
        primary: grey[700]
    },
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
