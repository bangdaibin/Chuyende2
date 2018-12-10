import { FETCH_SHIRTPRODUCTS } from '../actions/types';
import {FETCH_PAINTPRODUCTS} from '../actions/types';
import {FETCH_MAINPRODUCTS} from '../actions/types';

const initialState = {
  items: [],
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_SHIRTPRODUCTS:
      return {
        ...state,
        items: action.payload
      }

    case FETCH_PAINTPRODUCTS:
      return {
        ...state,
        items: action.payload
      }

      case FETCH_MAINPRODUCTS:
        return {
          ...state,
          items: action.payload
        }
    default:
      return state;
  }
}
