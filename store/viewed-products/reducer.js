import { handleActions } from 'redux-actions';

import {
  getViewedProducts,
  getViewedProductsError,
  getViewedProductsSuccess,
} from './action';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default handleActions({
  [getViewedProducts]: (state) => ({ ...state, loading: true, error: false }),
  [getViewedProductsSuccess]: (state, {
    payload: { data },
  }) => ({ ...state, loading: false, data }),
  [getViewedProductsError]: (state) => ({ ...state, loading: false, error: true }),
}, initialState);

export const selectViewedProducts = ({ viewedProducts }) => ({
  loading: viewedProducts.loading,
  error: viewedProducts.error,
  data: viewedProducts.data,
});
