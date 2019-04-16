import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
  toastr: toastrReducer
});
