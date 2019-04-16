import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REQUEST_FETCH,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILED,
  LOGOUT
} from './types';
import { setError } from './errorActions';

// Register user
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

// Login user
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

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: REQUEST_FETCH });

  axios
    .get('/api/users', tokenConfig(getState().auth.token))
    .then(res => {
      dispatch({ type: LOAD_USER_SUCCESS, payload: res.data });
    })
    .catch(({ response }) => {
      dispatch(setError(response.data.msg, response.status));
      dispatch({ type: LOAD_USER_FAILED });
    });
};

export const logout = () => ({ type: LOGOUT });

export function tokenConfig(token) {
  if (token) {
    return { headers: { 'x-auth-token': token } };
  }
}
