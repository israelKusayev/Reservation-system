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

  isAuthenticated: false,
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_FETCH:
      return {
        ...state
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem(tokenKey, payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user
      };

    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOAD_USER_FAILED:
    case LOGOUT:
      localStorage.removeItem(tokenKey);
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };

    default:
      return state;
  }
};
