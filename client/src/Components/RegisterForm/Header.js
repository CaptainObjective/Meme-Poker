import React from "react";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#333333",
    height: "19vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    height: "50vh",
    weight: "30vh",
  },
  memepocker: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pockerUp: {
    weight: "80px",
    display: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <div className={classes.paper}>
        <Grid className={classes.pockerUp}>
          <Grid item>MEME </Grid>
          <Grid item>PHOTO</Grid>
        </Grid>
        <Grid container>
          <Grid item>PHOTO</Grid> <Grid item>PHOTO</Grid>
        </Grid>
      </div>
    </AppBar>
  );
};

export default Header;
