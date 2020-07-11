import React, { useState, useEffect } from 'react';
import { Avatar, Paper, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { useUserContext } from 'Contexts/UserContext';
import { useRoomContext } from 'Contexts/RoomContext';
import UserBoxStyles from './UserBoxStyles';
import { useSocket } from 'socketio-hooks';

const UserBox = () => {
  const [task, setTask] = useState('waiting for first task');
  const { getUserName } = useUserContext();
  const { response } = useRoomContext();
  const { roomId } = useParams();

  useEffect(() => {
    if (response) {
      const { title } = response.room.task;

      if (title) setTask(title);
    }
  }, [response]);

  useSocket('TASK_UPDATED', ({ title }) => setTask(title));

  const classes = UserBoxStyles();
  const name = getUserName(roomId);

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatarLg}>{name.charAt(0).toUpperCase()}</Avatar>
      <Paper elevation={0} className={classes.paper} variant="outlined">
        <Typography display="block" variant="h6">
          {task}
        </Typography>
        <Typography display="block" variant="subtitle2">
          {name}
        </Typography>
      </Paper>
    </div>
  );
};

export default UserBox;
