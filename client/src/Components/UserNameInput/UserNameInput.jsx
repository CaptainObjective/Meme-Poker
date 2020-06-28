import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { useForm } from 'react-hook-form';

import TextField from '@material-ui/core/TextField';

import { useUserContext } from 'Contexts/UserContext';
import PromotedText from 'Components/PromotedText/PromotedText';
import ContainerApp from 'Components/ContainerApp';
import UserNameStyles from './UserNameStyles';
import VoteButton from 'Components/VoteButton';
import photo1 from '../../assets/img1.png';
import photo2 from '../../assets/img2.jpg';

const yup = require('yup');

const Schema = yup.object().shape({
  name: yup.string().required(),
});
const UserNameInput = () => {
  const classes = UserNameStyles();
  const { changeName } = useUserContext();
  const { roomId } = useParams();
  const history = useHistory();
  const sendName = useEmit('USER_JOINED');

  const { register, handleSubmit, errors } = useForm({
    validationSchema: Schema,
  });

  const onSubmitHandler = ({ name }) => {
    changeName(name);
    sendName({ name, roomId });
    history.push(`/room/${roomId}`);
  };

  return (
    <>
      <ContainerApp>
        <PromotedText text={`JOIN THE MEETING AS...`} />
        <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
          <div className={classes.root}>
            <div>
              <img src={photo1} alt="twitter avatar" className={classes.img} />
            </div>
            <div className={classes.wrapper}>
              <div className={classes.wrapper__input}>
                <TextField
                  label="NAME"
                  variant="outlined"
                  id="name"
                  placeholder="NAME"
                  autoComplete="off"
                  name="name"
                  inputRef={register}
                  error={!!errors.name}
                  size="small"
                  fullWidth
                ></TextField>
              </div>
              <div className={classes.wrapper__button}>
                <VoteButton content={'JOIN SESSION'} height={2.8} className={classes.wrapper__button} />
              </div>
            </div>
            <div>
              <img src={photo2} alt="twitter avatar" className={classes.img} />
            </div>
          </div>
        </form>
      </ContainerApp>
    </>
  );
};

export default UserNameInput;
