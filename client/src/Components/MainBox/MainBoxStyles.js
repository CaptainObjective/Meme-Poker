import { makeStyles } from '@material-ui/core/styles';

const mainBoxStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey.A400,
    padding: theme.spacing(3),
    borderColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
}));

export default mainBoxStyles;
