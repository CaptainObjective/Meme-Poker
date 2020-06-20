import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const buttonStyles = makeStyles((theme) => ({
  link: { underline: 'none' },
}));

const CreateNewRoom = () => {
  const classes = buttonStyles();

  const sessionNumber = Math.round(Math.random() * 100);

  return (
    <>
      <Link to={`/room/${sessionNumber}/join`} className={classes.link}>
        <Button variant="contained" color="primary" disableElevation fullWidth>
          START SESSION
        </Button>
      </Link>
    </>
  );
};

export default CreateNewRoom;
