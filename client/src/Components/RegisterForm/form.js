import React from "react";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const yup = require("yup");

let RegisterSchema = yup.object().shape({
  email: yup.string().required().email(),
  username: yup.string().required(),
  password: yup.string().required(),
  confirmpassword: yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(4, 0, 4),
  },
}));

const Register = ({ onSubmitFn }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema,
  });
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          REGISTRATION
        </Typography>
        <form className={classes.root} noValidate onSubmit={handleSubmit(onSubmitFn)}>
          <TextField
            inputRef={register}
            id="username"
            label="user name"
            name="username"
            error={!!errors.username}
            fullWidth
            helperText={errors.username ? errors.username.message : " "}
          />

          <TextField
            id="email"
            label="email"
            name="email"
            fullWidth
            inputRef={register}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : " "}
          />
          <TextField
            id="password"
            label="password"
            name="password"
            fullWidth
            placeholder="password"
            type="password"
            error={!!errors.password}
            inputRef={register}
            helperText={errors.password ? errors.password.message : " "}
          />
          <TextField
            id="confirmpassword"
            label="confirm password"
            name="confirmpassword"
            fullWidth
            placeholder="name"
            type="password"
            inputRef={register}
            error={!!errors.confirmpassword}
            helperText={errors.confirmpassword ? errors.confirmpassword.message : " "}
          />

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            REGISTER
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
