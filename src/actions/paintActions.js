import { FETCH_PAINTPRODUCTS} from './types';
import axios from 'axios';

const productAPI = "http://localhost:3000/db";

const compare = {
  'lowestprice': (a, b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  },
  'highestprice': (a, b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

export const fetchPaintProducts = (filters, sortBy, callback) => dispatch => {

  axios.get(productAPI)
  .then( res => {
    let { paintproducts } = res.data;

    if(!!filters && filters.length > 0){
      paintproducts = paintproducts.filter( p => filters.find( f => p.availableSizes.find(size => size === f)))
    }

    if(!!sortBy){
        paintproducts = paintproducts.sort(compare[sortBy]);
      }

    if(!!callback) {
      callback();
    }

    return dispatch({
      type: FETCH_PAINTPRODUCTS,
      payload: paintproducts
    });
  })
  .catch(err => {
    console.log(err);
    throw new Error('Could not fetch products. Try again later.');
  })
}
