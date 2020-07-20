import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import cardStyles from './CardStyles';

const MemeCard = ({ value, img, selected, selectCard, id }) => {
  const classes = cardStyles();
  const sendEstimation = useEmit('USER_VOTED');
  const { getUserName } = useUserContext();
  const { roomId } = useParams();

  const name = getUserName(roomId);

  const onClickHandler = () => {
    sendEstimation({ name, value, roomId });
    selectCard(id);
  };

  return (
    <Card className={selected ? classes.selected : classes.main} variant="outlined">
      <CardActionArea onClick={onClickHandler}>
        <CardMedia className={classes.media} component="img" alt={value} src={img} height="50" />
        <CardContent className={classes.content}>
          <Typography className={classes.contentText} variant="body2">
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemeCard;
