import { createTheme } from "@mui/material/styles";

export const themeOne = createTheme({
  palette: {
    primary: {
      main: "#003C37",
      variant: "#A0DCD7",
    },
    secondary: {
      main: "#354E00",
      variant: "#D5EE97",
    },
    error: {
      main: "#AD2809",
    },
    text: {
      primary: "#ffffff",
      secondary: "#003C37",
    },
  },
});

export default themeOne;
