import React from "react";

import Header from "./Header";
import Body from "./Body";

import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const Register = ({ onSubmitFn }) => {
  return (
    <Grid container direction="column">
      <Header />
      <ThemeProvider theme={theme}>
        <Body button={onSubmitFn} />
      </ThemeProvider>
    </Grid>
  );
};

export default Register;
