import { makeStyles } from '@material-ui/core/styles';

const UserBoxStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    border: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    border: `2px solid ${theme.palette.primary.main}`,
  },
  avatarLg: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
  },
}));

export default UserBoxStyles;