import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#115293",
    },
    background: {
      default: "#16161a",
      sectionA: "#16161a",
      sectionB: "#242629",
    },
    text: {
      primary: "#fffffe",
      secondary: "#94a1b2",
    },
    icon: {
      main: "#7f5af0",
      hover: "#fff",
    },
  },
  typography: {
    fontFamily: "sans-serif,Roboto",
  },
});

export default theme;
