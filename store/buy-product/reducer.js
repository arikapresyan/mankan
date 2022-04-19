import { handleActions } from 'redux-actions';
import {
  getProductToBuy,
  getProductToBuyError,
  getProductToBuyReset,
  getProductToBuySuccess,
} from './action';

const initialState = {
  loading: false,
  data: null,
  error: false,
};
export default handleActions({
  [getProductToBuy]: (state) => ({
    ...state,
    loading: true,
    error: false,
  }),
  [getProductToBuySuccess]: (state, {
    payload:
     { data },
  }) => ({ ...state, loading: false, data }),
  [getProductToBuyError]: (state) => ({
    ...state,
    loading: false,
    error: true,
  }),
  [getProductToBuyReset]: () => ({ ...initialState }),
}, initialState);
