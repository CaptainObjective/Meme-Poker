import React from "react";
import { useForm } from "react-hook-form";

import photo1 from "../../assets/images/pngfind.com-meme-faces-png-13834.png";
import photo2 from "../../assets/images/pngfind.com-memes-png-401574.png";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const yup = require("yup");

const defaultProps = {
  bgcolor: "#333333",
  borderColor: "#64DD17",
  border: 2,
};

let RegisterSchema = yup.object().shape({
  email: yup.string().required().email(),
  username: yup.string().required(),
  password: yup.string().required(),
  confirmpassword: yup.string().required(),
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  // .MuiFormLabel-root{color:"#FFF"},

  block: {
    padding: theme.spacing(0),
    marginTop: theme.spacing(4),
  },
  avatarTypography: {
    color: "#FFFF",
  },
  test: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    //   odleglosc formularza od nagłówka
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#333333",
    padding: theme.spacing(2),
    border: "#64DD17",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: "#64DD17",
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  input: {
    background: "#FFFF",
    color: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: "#FFFF",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  media: {
    backgroundColor: "transparent",
    height: 0,
    paddingRight: "40%", // 16:9
  },
  image: {
    width: "130px",
    height: "120px",
  },
  icon: {
    color: "#64DD17",
  },
}));
const Body = ({ button }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: RegisterSchema,
  });
  return (
    <Container component="main" maxWidth="xs" className={classes.block}>
      <CssBaseline />
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

      <Box mt={1}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Body;
