import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const light = createTheme({
  palette: {
    primary: {
      main: grey[900],
      background: "#fff",
      faded: grey[100],
      bright: "#fb0307",
      channelName: grey[500],
      video: grey[300],
      videoChannel: grey[800],
    },
  },

  breakpoints: {
    values: {
      sm: 0,
      mm: 375,
      lm: 425,
      t: 768,
      l: 1024,
      ll: 1440,
      xl: 2560,
    },
  },
});

export const dark = createTheme({
  palette: {
    primary: {
      main: "#fff",
      background: grey[900],
      faded: grey[100],
      bright: "#fb0307",
    },
  },

  breakpoints: {
    values: {
      sm: 0,
      mm: 375,
      lm: 425,
      t: 768,
      l: 1024,
      ll: 1440,
      xl: 2560,
    },
  },
});
