import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Grid, Paper, Box } from '@material-ui/core';

import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';
import RoomStyles from './RoomStyles';
import TaskNameInput from 'Components/TaskNameInput';
import InfoBox from 'Components/InfoBox';
import UserBox from 'Components/UserBox';
import MainBox from 'Components/MainBox';
import Results from 'Components/Results';
import Timer from 'Components/Timer';
import { RoomContext } from '../../Contexts/RoomContext';

const Room = () => {
  const classes = RoomStyles();

  const context = useContext(RoomContext); //context initialization
  const { response, getData } = context; // des. state from context

  console.log(response);
  const { getUserName } = useUserContext();
  const { roomId } = useParams();

  useEffect(() => {
    getData(roomId);
  }, []);

  if (!getUserName(roomId)) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <MainBox>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8} className={classes.main}>
          <Box className={classes.top} component="div">
            <UserBox head="CHOOSE A MEME!" text="You have to choose only one card! Do it quickly :D" />
            <Box className={classes.info}>
              <Timer />
              <InfoBox title="Room ID" value={roomId} />
            </Box>
          </Box>
          <Paper className={classes.cards}>
            <TaskNameInput />
            <Cards />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Results />
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default Room;
