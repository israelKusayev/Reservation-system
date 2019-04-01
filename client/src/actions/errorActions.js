import { SET_ERRORS, CLEAR_ERRORS } from './types';

export const setError = (msg, status, id = null) => {
  return {
    type: SET_ERRORS,
    payload: {
      msg,
      status,
      id
    }
  };
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
