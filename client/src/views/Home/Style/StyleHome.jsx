import { makeStyles } from '@material-ui/core/styles';

const StyleHome = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(1, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    marginTop: theme.spacing(25),
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.grey.A400,
    border: `3px solid ${theme.palette.primary.main}`,
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: { marginBottom: '30px' },
  header__avatar: { marginTop: theme.spacing(2) },
  header__avatarIcon: {
    width: '95px',
    height: '95px',
    margin: 'auto',
  },

  header__textavatar: {
    padding: '10px',
  },

  header__text: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },

  header__text_head: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: '25px',
  },

  header__text_main: {
    color: 'white',
    fontSize: '5px',
  },

  game__wrapper: {
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game__wrapper__text: {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
  },

  game__wrapper__header__textL: {
    color: '#FFFF',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    borderRight: `1px solid ${theme.palette.primary.main}`,
  },
  game__wrapper__header__textR: {
    color: '#FFFF',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  game__wrapper__header__text_up: {
    color: '#FFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    backgroundColor: '#388E3C',
    height: '50px',
    fontSize: '24px',
  },
  game__wrapper__footer: {
    display: 'flex',
    displayFlex: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  game__wrapper__footer_button: { color: '#FFFF', marginTop: '5px' },
  link: { underline: 'none' },
}));

export default StyleHome;
