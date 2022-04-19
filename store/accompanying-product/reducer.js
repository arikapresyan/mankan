import { handleActions } from 'redux-actions';

import {
  getAccompanyingProduct,
  getAccompanyingProductSuccess,
  getAccompanyingProductError,
  resetAccompanyingProductReducer,
} from './action';


const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default handleActions({
  [getAccompanyingProduct]: () => ({
    ...initialState,
    loading: true,
    error: false,
    data: [],
  }),
  [getAccompanyingProductSuccess]: (state, { payload: { data } }) => ({
    ...state,
    error: false,
    loading: false,
    data,
  }),
  [getAccompanyingProductError]: () => ({ ...initialState, error: true }),
  [resetAccompanyingProductReducer]: () => initialState,
}, initialState);
export const selectAccompanyingProducts = ({ accompanying }) => accompanying.data;
