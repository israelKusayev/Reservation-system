import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAILED, REQUEST_FETCH } from './types';

export const register = user => dispatch => {
  dispatch({ type: REQUEST_FETCH });

  axios
    .post('/api/users', JSON.stringify(user))
    .then(data => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAILED,
        payload: err
      });
    });
};
