import { InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const TaskNameInputStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    borderRadius: '5px',
    '& > label, div': {
      marginRight: theme.spacing(1),
    },
    '& > label': {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  },
  btn: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
  },

  textField: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputBase-root': {
      color: 'white',
      backgroundColor: theme.palette.background.paper,
      height: '38px',
    },
    '& .MuiFormLabel-root': {
      fontSize: theme.typography.body1.fontSize,
      color: 'white',
    },
    '& .label.Mui-focused': {
      fontSize: '12px',
    },
    '& .MuiFilledInput-root': {
      borderRadius: '8px',
    },
  },
  textFieldError: {
    '& .MuiInputBase-root': {
      color: 'red',
      backgroundColor: theme.palette.background.paper,
      fontWeight: 'bold',
      height: '38px',
    },
  },
}));

const CustomLabel = withStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },
}))(InputLabel);

export { TaskNameInputStyles, CustomLabel };
