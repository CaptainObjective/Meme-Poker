import { makeStyles } from '@material-ui/core/styles';

const infoBoxStyles = makeStyles(theme => ({
  root: {
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(0.25),
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    '& :first-child': {
      textTransform: 'uppercase',
    },
  },
}));

export default infoBoxStyles;
