import { makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridGap: theme.spacing(1),
  },
  main: {
    backgroundColor: 'black',
    padding: 5,
    height: 118,
  },
  media: {
    backgroundColor: '#FFFF',
    marginBottom: '5px',
    borderRadius: '3px',
  },

  content: {
    height: 50,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    padding: '5px',
  },
  contentText: {
    backgroundColor: 'rgba(0,15,0,0.4)',
    height: '100%',
    borderRadius: '3px',
    border: `2px solid #FFFF`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default CardStyles;
