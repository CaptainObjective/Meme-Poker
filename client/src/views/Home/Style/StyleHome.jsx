import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const StyleHome = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(1, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: theme.palette.grey.A400,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '8px',
    marginTop: theme.spacing(25),
    boxShadow: theme.shadows[10],
    backgroundColor: 'red',
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  footer: {
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    backgroundColor: 'blue',
  },

  header: { backgroundColor: 'green' },
  header__avatar: { marginTop: theme.spacing(2), backgroundColor: 'white' },
  header__avatarIcon: {
    width: '95px',
    height: '95px',
    margin: 'auto',
  },

  header__textavatar: {
    padding: '10px',
    backgroundColor: 'gray',
  },

  header__text: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    backgroundColor: 'purple',
  },

  header__text_head: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: '25px',
    backgroundColor: 'orange',
  },

  header__text_main: {
    color: 'white',
    fontSize: '5px',
    backgroundColor: 'black',
  },
  footer__main: { backgroundColor: 'white' },
  footer__subject: { backgroundcolor: 'yellow' },

  footer__subject: {
    justifyContent: 'center',
    color: 'white',
    border: `2px solid #388E3C`,
    fontSize: '24px',
    borderRadius: '4px',
    backgroundColor: 'brown',
  },
  button__grid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  button__text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: theme.spacing(1),
    marginTop: '3px',
    marginBottom: '3px',
  },

  button: {
    color: 'white',
    height: '4em',
  },
  test: { margin: theme.spacing(2) },
}));

export default StyleHome;
