import {AuthTypes} from '../types';

export const registerAction = data => {
  console.log(data, 'in action');
  return {
    type: AuthTypes.REGISTER,
    payload: data,
  };
};

export const loginAction = payload => {
  console.log(payload, 'payload in action ');
  return {
    type: AuthTypes.LOGIN,
    payload,
  };
};

export const authSuccessAction = () => {
  return {
    type: AuthTypes.AUTH_SUCCESS,
  };
};

export const setErrorMessage = payload => {
  return {
    type: AuthTypes.SET_ERROR_MESSAGE,
    payload,
  };
};
