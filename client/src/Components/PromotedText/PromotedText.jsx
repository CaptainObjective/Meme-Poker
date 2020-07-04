import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import promotedTextStyles from './PromotedTextStyles';

const PromotedText = ({ text }) => {
  const classes = promotedTextStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography component="div" variant="h5">
        {text}
      </Typography>
    </Paper>
  );
};

export default PromotedText;
