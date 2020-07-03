import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import HeaderStyles from './HeaderStyles';
import Logo from 'Assets/Images/logo.png';

const Header = () => {
  const classes = HeaderStyles();

  return (
    <Box className={classes.root}>
      <Link to="/">
        <img className={classes.img} src={Logo} alt="logo" />
      </Link>
    </Box>
  );
};

export default Header;
