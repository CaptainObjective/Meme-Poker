import { makeStyles } from '@material-ui/core/styles';

const cardStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: 3,
  },
  main: {
    backgroundColor: 'black',
    cursor: 'default',
  },
  selected: {
    backgroundColor: 'yellow',
    transform: 'scale(1.2)',
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      height: '50px',
    },
  },
  cards: {
    '&:hover': {
      cursor: 'default',
    },
  },
  media: {
    backgroundColor: '#FFFF',
    height: 60,
    marginRight: theme.spacing(0.5),
    marginBottom: '5px',
    [theme.breakpoints.down('xs')]: {
      width: '60%',
      height: '100%',
      marginBottom: 0,
    },
  },

  content: {
    height: 40,
    backgroundColor: theme.palette.secondary.main,
    padding: '3px',
    [theme.breakpoints.down('xs')]: {
      width: '40%',
      height: '100%',
    },
  },
  contentText: {
    backgroundColor: 'rgba(0,15,0,0.4)',
    height: '100%',
    fontWeight: 'medium',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default cardStyles;
