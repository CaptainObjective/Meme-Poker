import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import StyleHome from 'views/Home/Style/StyleHome';

const useStyles = makeStyles((theme) => ({
  margin: '4px',
}));

const JoinRoom = () => {
  const classes = StyleHome();
  const [roomId, setRoomId] = useState('');
  const { push } = useHistory();

  const onInputHandler = ({ target: { value } }) => setRoomId(value);

  const connectToRoom = () => {
    push(`/room/${roomId}/join`);
  };

  return (
    <>
      <Grid item sm={2} xs={4} className={classes.game__wrapper__footer_button}>
        <form onSubmit={connectToRoom} noValidate autoComplete="off">
          <TextField
            margin="none"
            size="small"
            label="room's number"
            variant="outlined"
            name="roomId"
            id="roomId"
            type="text"
            value={roomId}
            onChange={onInputHandler}
          />
          {/* <Home onClickFn={onInputHandler}></Home> */}
        </form>
      </Grid>
      <Grid item sm={5} xs={4}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          className={classes.game__wrapper__footer_button}
          type="submit"
          onClick={() => connectToRoom()}
        >
          JOIN SESSION
        </Button>
      </Grid>
    </>
  );
};

export default JoinRoom;
