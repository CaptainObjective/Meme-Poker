import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { useUserContext } from 'Contexts/UserContext';
import { TaskNameInputStyles, CustomLabel } from './TaskNameInputStyles';
import { useBackend } from 'hooks/useBackend';

import { Box, Button, TextField, Input, InputAdornment, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Schema = yup.object().shape({
  task: yup.string().required(),
});

const TaskNameInput = () => {
  const { user } = useUserContext();
  const sendTask = useBackend('NEW_TASK');
  const classes = TaskNameInputStyles();

  const { register, reset, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });

  const onSubmitHandler = ({ task }) => {
    sendTask({ task });
    reset();
  };

  if (!user.isAdmin) return null;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Box className={classes.root} mb={2}>
        <CustomLabel htmlFor="task">Task name:</CustomLabel>
        <TextField
          className={errors.task ? classes.textFieldError : classes.textField}
          id="task"
          name="task"
          variant="outlined"
          placeholder={errors.task ? errors.task.message : 'Task Name'}
          fullWidth
          autoComplete="off"
          inputRef={register}
          error={!!errors.task}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" type="submit">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </form>
  );
};

export default TaskNameInput;
