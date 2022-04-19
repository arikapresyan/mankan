import { createActions } from 'redux-actions';


export const {
  getAccompanyingProduct,
  getAccompanyingProductSuccess,
  getAccompanyingProductError,
  resetAccompanyingProductReducer,
} = createActions(
  'GET_ACCOMPANYING_PRODUCT',
  'GET_ACCOMPANYING_PRODUCT_SUCCESS',
  'GET_ACCOMPANYING_PRODUCT_ERROR',
  'RESET_ACCOMPANYING_PRODUCT_REDUCER',
);
