import { SET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  msg: '',
  status: null,
  id: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERRORS:
      return {
        ...state,
        ...payload
      };
    case CLEAR_ERRORS: {
      return {
        msg: '',
        status: null,
        id: null
      };
    }
    default:
      return state;
  }
};
