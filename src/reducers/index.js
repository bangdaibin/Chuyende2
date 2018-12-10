import { combineReducers } from 'redux';
import productReducer from './productReducer';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';
import floatCartReducer from './floatCartReducer';
import updateCartReducer from './updateCartReducer';

export default combineReducers({
  products: productReducer,
  filters: filterReducer,
  sort: sortReducer,
  cartProducts: floatCartReducer,
  cartTotals: updateCartReducer,
});
