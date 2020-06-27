import { makeStyles } from '@material-ui/core/styles';

const HomeStyles = makeStyles(theme => ({
  wrapper: { display: 'flex', flexDirection: 'column' },
  wrapperUserBox: { marginBottom: '2em' },
  wrapperItem: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em 3em',
    justifyContent: 'space-around',
  },
  wrapperItemColumn: {
    width: '40%',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  divider: {
    marginTop: '2em',
    backgroundColor: theme.palette.primary.main,
    height: '7em',
  },
}));

export default HomeStyles;
