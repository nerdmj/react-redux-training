import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productsReducer from './productsReducer'


const reducers = combineReducers({
  'users' : userReducer,
  'info' : productsReducer
});

export default reducers;
