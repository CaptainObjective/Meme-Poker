import React from 'react';
import { Link } from 'react-router-dom';

import VoteButton from 'Components/VoteButton';
import CreateNewRoomStyles from './CreateNewRoomStyles';

const CreateNewRoom = () => {
  const classes = CreateNewRoomStyles();
  const sessionNumber = Math.round(Math.random() * 100);

  return (
    <>
      <Link to={`/room/${sessionNumber}/join`} className={classes.link}>
        <div className={classes.buttonSession}>
          <VoteButton content={'START SESSION'} />
        </div>
      </Link>
    </>
  );
};

export default CreateNewRoom;
