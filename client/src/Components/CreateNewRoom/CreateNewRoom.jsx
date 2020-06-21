import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import StyleHome from '../../views/Home/Style/StyleHome';

const CreateNewRoom = () => {
  const classes = StyleHome();

  const sessionNumber = Math.round(Math.random() * 100);

  return (
    <>
      <Link to={`/room/${sessionNumber}/join`} className={classes.link}>
        <Button
          variant="contained"
          color="primary"
          className={classes.game__wrapper__footer_button}
          disableElevation
          fullWidth
        >
          START SESSION
        </Button>
      </Link>
    </>
  );
};

export default CreateNewRoom;
