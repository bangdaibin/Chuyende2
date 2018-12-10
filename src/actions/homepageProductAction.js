import { FETCH_MAINPRODUCTS} from './types';
import axios from 'axios';

const productAPI = "http://localhost:3000/db";

export const fetchMainProducts = () => dispatch => {

  axios.get(productAPI)
  .then( res => {
    let { mainproducts } = res.data;

    return dispatch({
      type: FETCH_MAINPRODUCTS,
      payload: mainproducts
    });
  })
  .catch(err => {
    console.log(err);
    throw new Error('Could not fetch products. Try again later.');
  })
}
