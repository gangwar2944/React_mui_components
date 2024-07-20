import { createTheme } from "@mui/material";

export const theme = createTheme({
    status: {
      danger: "#defe4e",
    },
    palette: {
      secondary: {
        main: "#d10a0a",
      },
      neutral: {
        main: "#cc0ecc",
        dark: "#700470",
        darker: "#620462",
      },
      graphColor:{
        main:"#0066ff",
        red:"#d10a0a",
        peela: "#defe4e",
        gulabi:"#ff3399",
      }
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });