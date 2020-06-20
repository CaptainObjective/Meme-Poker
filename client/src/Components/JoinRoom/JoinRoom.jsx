import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  margin: '4px',
}));

const JoinRoom = () => {
  const classes = useStyles();

  const [roomId, setRoomId] = useState('');
  const { push } = useHistory();

  const onInputHandler = ({ target: { value } }) => setRoomId(value);

  const connectToRoom = () => {
    push(`/room/${roomId}/join`);
  };

  return (
    <>
      <form onSubmit={connectToRoom} noValidate autoComplete="off" fullWidth>
        <TextField
          label="room's number"
          variant="outlined"
          name="roomId"
          id="roomId"
          type="text"
          value={roomId}
          onChange={onInputHandler}
        />
      </form>
    </>
  );
};

export default JoinRoom;
