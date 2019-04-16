import {
  REQUEST_FETCH,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILED
} from './types';
import axios from 'axios';
import history from '../utils/history';
import { tokenConfig } from './authActions';
import { showError } from './toastAction';

export const addRestaurant = restaurant => (dispatch, getState) => {
  dispatch({ type: REQUEST_FETCH });

  axios
    .post(
      'api/restaurant/add',
      JSON.stringify(restaurant),
      tokenConfig(getState().auth.token)
    )
    .then(res => {
      dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: res.data });
      history.push('/home');
    })
    .catch(({ response }) => {
      dispatch(showError(response.data.msg));
      dispatch({ type: ADD_RESTAURANT_FAILED });
    });
};
