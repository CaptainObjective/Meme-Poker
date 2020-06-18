import React from "react";

import BodyForm from "./BodyForm.jsx";

import Grid from "@material-ui/core/Grid";

const Register = ({ onSubmitFn }) => {
  return (
    <Grid container direction="column">
      <BodyForm button={onSubmitFn} />
    </Grid>
  );
};

export default Register;
