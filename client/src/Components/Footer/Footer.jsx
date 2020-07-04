import React from 'react';

import footerStyles from './FooterStyles';

const Footer = () => {
  const classes = footerStyles();

  return <div className={classes.footer}>Footer</div>;
};

export default Footer;
