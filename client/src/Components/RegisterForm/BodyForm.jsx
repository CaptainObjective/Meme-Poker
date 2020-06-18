import React from "react";
import { useForm } from "react-hook-form";

import useStyles from "./Style/innerStyle";
// import { GlobalCss } from "./Style/globalStyle";
import { withStyles } from "@material-ui/core/styles";

import photo2 from "../../assets/images/pngfind.com-memes-png-401574.png";
import photo1 from "../../assets/images/pngfind.com-meme-faces-png-13834.png";

import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const yup = require("yup");

let RegisterSchema = yup.object().shape({
  email: yup.string().required().email(),
  username: yup.string().required(),
  password: yup.string().required(),
  confirmpassword: yup.string().required(),
});

const defaultProps = {
  bgcolor: "#333333",
  borderColor: "#64DD17",
  border: 2,
};

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiFormLabel-root": {
      color: "#FFF",
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFF",
    },
    ".MuiCheckbox-root": {
      color: "#FFF",
    },
  },
})(() => null);

const Body = ({ button }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema,
  });
  return (
    <Container component="main" maxWidth="xs" className={classes.block}>
      {/* <CssBaseline /> */}
      <GlobalCss />
      <Box borderRadius="borderRadius" {...defaultProps}>
        <div className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <img src={photo1} alt="mem2" className={classes.image} />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.test}>
              <Avatar className={classes.avatar}></Avatar>
              <Typography component="h4" variant="h4" className={classes.avatarTypography}>
                Sign up
              </Typography>
              <LockOutlinedIcon className={classes.icon} />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.media}>
              <img src={photo2} alt="mem1" className={classes.image} />
            </Grid>
          </Grid>

          <form className={classes.form} noValidate onSubmit={handleSubmit(button)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.input}
                  variant="outlined"
                  inputRef={register}
                  id="username"
                  label="user name"
                  name="username"
                  error={!!errors.username}
                  fullWidth
                  helperText={errors.username ? errors.username.message : " "}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  id="email"
                  label="email"
                  name="email"
                  fullWidth
                  inputRef={register}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : " "}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
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
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </Container>
  );
};
export default Body;
