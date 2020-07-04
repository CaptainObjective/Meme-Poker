import React from 'react';
import { Button } from '@material-ui/core';

import voteButtonStyles from './VoteButtonStyles';
import theme from 'theme';

const VoteBtn = ({ content, height, btnFunction = () => {} }) => {
  const classes = voteButtonStyles(theme, height);

  return (
    <Button
      className={classes.root}
      variant="contained"
      color="primary"
      fullWidth
      type="submit"
      onClick={e => btnFunction(e)}
    >
      {content}
    </Button>
  );
};

export default VoteBtn;
