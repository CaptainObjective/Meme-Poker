import React from 'react';

import CreateNewRoom from 'Components/CreateNewRoom/';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import StyleHome from './Style/StyleHome';
import { useUserContext } from '../../Contexts/UserContext';
import TextField from '@material-ui/core/TextField';

const Home = ({ onclickFn }) => {
  const classes = StyleHome();
  return (
    <div>
      <Grid container fixed className={classes.grid}>
        <Grid container item sm={8} xs={12} className={classes.root}>
          <Grid container item sm={12} xs={12} className={classes.header}>
            <Grid item sm={2} xs={12} className={classes.header__avatar}>
              <Avatar className={classes.header__avatarIcon}>K</Avatar>
            </Grid>

            <Grid item sm={10} xs={12} className={classes.header__textavatar}>
              <Grid item sm={12} xs={12} className={classes.header__text}>
                <Grid item sm={12} xs={12} className={classes.header__text_head}>
                  <Typography className={classes.header__text_head}>Name</Typography>
                </Grid>

                <Grid item sm={12} xs={12} className={classes.header__text_main}>
                  <Typography>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item sm={12} xs={12} className={classes.footer}>
            {' '}
            {/*brown*/}
            <Grid container item sm={10} xs={12} className={classes.footer__main}>
              {' '}
              {/*white*/}
              <Grid container item sm={12} xs={12} className={classes.footer__subject}>
                POINTING SESSION
              </Grid>
              <Grid container item sm={12} xs={12} fullWidth className={classes.button__text}>
                <Grid item sm={5} xs={6} fullWidth className={classes.button__text2}>
                  <Typography>CREATE NEW SESSION</Typography>
                </Grid>
                <Grid item sm={7} xs={6} fullWidth className={classes.button__text2}>
                  <Typography>ADD ROOM'S NUMBER</Typography>
                </Grid>
              </Grid>
              <Grid container item sm={12} xs={12} className={classes.button__grid}>
                <Grid item sm={5} xs={4}>
                  <CreateNewRoom />
                </Grid>
                <Grid item sm={2} xs={4}>
                  <JoinRoom />{' '}
                </Grid>
                <Grid item sm={5} xs={4}>
                  <Button variant="contained" color="primary" disableElevation className={classes.button} fullWidth>
                    JOIN SESSION
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
