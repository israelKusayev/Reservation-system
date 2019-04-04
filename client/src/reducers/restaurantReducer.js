import {
  ADD_RESTAURANT_SUCCESS,
  ADD_RESTAURANT_FAILED
} from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_RESTAURANT_SUCCESS:
      return { ...state, ...payload };
    case ADD_RESTAURANT_FAILED:
    default:
      return state;
  }
};
