import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import StyleHome from 'views/Home/Style/StyleHome';

import CreateNewRoom from 'Components/CreateNewRoom/';

const yup = require('yup');

let Schema = yup.object().shape({
  roomId: yup.number().required(),
});

const JoinRoom = () => {
  const classes = StyleHome();
  const [roomId, setRoomId] = useState('');
  const { push } = useHistory();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });

  const onInputHandler = ({ target: { value } }) => setRoomId(value);

  console.log(onInputHandler);

  const connectToRoom = () => {
    push(`/room/${roomId}/join`);
  };

  return (
    <>
      <Grid spacing={1} container item sm={10} xs={12} className={classes.game__wrapper__footer}>
        <Grid item sm={5} xs={6}>
          <CreateNewRoom />
        </Grid>
        <Grid item sm={7} xs={6} className={classes.game__wrapper__footer_button}>
          <form onSubmit={handleSubmit(onInputHandler)} Validate autoComplete="off">
            <TextField
              margin="none"
              size="small"
              label="room's number"
              placeholder="roomId"
              variant="outlined"
              name="roomId"
              id="roomId"
              type="text"
              value={roomId}
              onChange={onInputHandler}
              inputRef={register}
              error={!!errors.roomId}
              fullWidth
            />
          </form>
        </Grid>
      </Grid>
      <Grid item sm={10} xs={12}>
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
