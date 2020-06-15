import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#333333",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <div></div>
    </AppBar>
  );
};

export default Header;
