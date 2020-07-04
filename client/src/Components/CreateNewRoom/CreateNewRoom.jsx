import React from 'react';
import { Link } from 'react-router-dom';

import VoteButton from 'Components/VoteButton/index.js';
import createNewRoomStyles from './CreateNewRoomStyles';

const CreateNewRoom = () => {
  const classes = createNewRoomStyles();
  const sessionNumber = Math.round(Math.random() * 100);

  return (
    <>
      <Link to={`/room/${sessionNumber}/join`} style={{ textDecoration: 'none' }}>
        <div className={classes.buttonSession}>
          <VoteButton content={'START SESSION'} />
        </div>
      </Link>
    </>
  );
};

export default CreateNewRoom;
