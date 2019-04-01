import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REQUEST_FETCH,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_USER_FAILED,
  LOAD_USER_SUCCESS,
  LOGOUT
} from '../actions/types';

const tokenKey = 'token';

const initialState = {
  token: localStorage.getItem(tokenKey),
  isFetching: false,
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FETCH:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        user: action.payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem(tokenKey, action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        user: action.payload.user
      };

    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOAD_USER_FAILED:
    case LOGOUT:
      localStorage.removeItem(tokenKey);
      return {
        ...state,
        isAuthenticated: false,
        isFetching: false,
        user: {}
      };

    default:
      return state;
  }
}
