import { SET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  msg: '',
  status: null,
  id: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        ...action.payload
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
}
