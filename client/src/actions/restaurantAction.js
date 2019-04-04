import {
  REQUEST_FETCH,
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILED
} from './types';
import axios from 'axios';

export const addRestaurant = restaurant => dispatch => {
  dispatch({ type: REQUEST_FETCH });

  axios
    .post('api/restaurant/add', JSON.stringify(restaurant))
    .then(res => {
      dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: res.data });
    })
    .catch(({ response }) => {
      dispatch({ type: ADD_RESTAURANT_FAILED });
    });
};
