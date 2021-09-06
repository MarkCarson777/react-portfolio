import { combineReducers } from 'redux';
import destinyReducer from './destinyReducer';

export default combineReducers({
  data: destinyReducer
});
