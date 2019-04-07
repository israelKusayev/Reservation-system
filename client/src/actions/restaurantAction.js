import {
  REQUEST_FETCH,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILED
} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';

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
    })
    .catch(({ response }) => {
      dispatch({ type: ADD_RESTAURANT_FAILED });
    });
};
