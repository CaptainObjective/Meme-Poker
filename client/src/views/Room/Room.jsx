import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { useUserContext } from 'Contexts/UserContext';
import roomStyles from './RoomStyles';
import SendIcon from '@material-ui/icons/Send';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiButton-root': {
      fontSize: '1rem',
    },
    '.MuiInputBase-input ': { color: '#FFFF' },
    '.MuiFormLabel-root': { color: '#FFFF' },
    '.MuiOutlinedInput-notchedOutline ': { borderColor: '#FFFF' },
  },
})(() => null);

const Room = () => {
  const classes = roomStyles();

  const { name } = useUserContext();
  const { roomId } = useParams();

  if (!name) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <Container fixed>
      <GlobalCss />

      <Grid container spacing={4} className={classes.grid}>
        <Grid container item sm={2} xs={12}></Grid>
        <Grid container item sm={4} xs={12} className={classes.main}></Grid>
        <Grid container item sm={4} xs={12} className={classes.join}>
          <Grid container item sm={2} xs={12}></Grid>
          <TextField variant="outlined" label="ROOM'S NUMBER" className={classes.text} />
          <Button variant="contained" color="primary" size="small" fullWidth>
            <SendIcon className={classes.buttonIcon} />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Room;
