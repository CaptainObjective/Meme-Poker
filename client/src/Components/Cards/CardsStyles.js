import { makeStyles } from '@material-ui/core/styles';

const cardStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridGap: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

export default cardStyles;
