import React from 'react';
import { Container, Box } from '@material-ui/core';

import Header from 'Components/Header/Header';
// import Footer from 'Components/Footer/Footer';
import TemplateStyles from './TemplateStyles';

const Template = props => {
  const classes = TemplateStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Container>
        {props.children}
        {/* <Footer /> */}
      </Container>
    </Box>
  );
};

export default Template;
