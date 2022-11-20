import { combineReducers } from 'redux';
import auth from '@/data/auth/reducers';
import product from '@/data/product/reducers';

const rootReducer = combineReducers({
  auth,
  product,
});

export default rootReducer;
