import React from 'react';
import JoinRoom from 'Components/JoinRoom/JoinRoom';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StyleHome from './Style/StyleHome';
import { withStyles } from '@material-ui/core/styles';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiFormLabel-root': {
      color: '#FFFF',
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: '#64DD17',
    },
    '.MuiCheckbox-root': {
      color: '#64DD17',
    },
    '.MuiLink-underlineNone': {
      underline: 'none',
    },
  },
})(() => null);

const Home = () => {
  const classes = StyleHome();
  return (
    <div>
      <Grid container className={classes.grid}>
        <GlobalCss />
        <Grid container item sm={8} xs={12} className={classes.root}>
          <Grid container item sm={12} xs={12} className={classes.header}>
            <Grid item sm={2} xs={12} className={classes.header__avatar}>
              <Avatar className={classes.header__avatarIcon}>K</Avatar>
            </Grid>

            <Grid item sm={10} xs={12} className={classes.header__textavatar}>
              <Grid item sm={12} xs={12} className={classes.header__text}>
                <Grid item sm={12} xs={12}>
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

          <Grid container spacing={1} item sm={12} xs={12} className={classes.game__wrapper}>
            <Grid container item sm={10} xs={12} className={classes.game__wrapper__header}>
              <Grid item sm={12} xs={12}>
                <Typography className={classes.game__wrapper__header__text_up} variant="subtitle1">
                  POINTING SESSION
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={1} sm={10} xs={12}>
              <Grid item sm={5} xs={5} className={classes.game__wrapper___text}>
                <Typography className={classes.game__wrapper__header__textL} variant="subtitle1">
                  CREATE NEW SESSION
                </Typography>
              </Grid>
              <Grid item sm={7} xs={7} className={classes.game__wrapper__text}>
                <Typography className={classes.game__wrapper__header__textR} variant="subtitle1">
                  ADD ROOM'S NUMBER
                </Typography>
              </Grid>
            </Grid>
            <JoinRoom />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
