import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REQUEST_FETCH
} from '../actions/types';

const initialState = {
  token: {},
  loading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FETCH:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false
      };

    case REGISTER_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
