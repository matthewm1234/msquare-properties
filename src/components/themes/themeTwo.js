import { createTheme } from "@mui/material/styles";

export const themeTwo = createTheme({
  palette: {
    primary: {
      main: "#942900",
      variant: "#FFCC40",
    },
    secondary: {
      main: "#5E4A00",
      variant: "#FEEA79",
    },
    error: {
      main: "#B00155",
    },
    text: {
      primary: "#ffffff",
      secondary: "#942900",
    },
  },
});

export default themeTwo;
