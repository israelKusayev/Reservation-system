import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REQUEST_FETCH,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';
import { setError } from './errorActions';

export const register = user => dispatch => {
  dispatch({ type: REQUEST_FETCH });

  axios
    .post('/api/users', JSON.stringify(user))
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(({ response }) => {
      dispatch(setError(response.data.msg, response.status));
      dispatch({
        type: REGISTER_FAILED
      });
    });
};

export const login = user => dispatch => {
  dispatch({ type: REQUEST_FETCH });

  axios
    .post('/api/auth', JSON.stringify(user))
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(({ response }) => {
      dispatch(setError(response.data.msg, response.status));
      dispatch({ type: LOGIN_FAILED });
    });
};
