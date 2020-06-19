import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

import { useUserContext } from 'Contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  test: { height: '100%' },
}));

const JoinRoom = () => {
  const classes = useStyles();

  return (
    <>
      <form noValidate autoComplete="off" fullWidth>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </>
  );
};

export default JoinRoom;
