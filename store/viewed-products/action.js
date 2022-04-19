import { createActions } from 'redux-actions';


export const {
  setViewedProducts,
  getViewedProducts,
  getViewedProductsSuccess,
  getViewedProductsError,
} = createActions(
  'SET_VIEWED_PRODUCTS',
  'GET_VIEWED_PRODUCTS',
  'GET_VIEWED_PRODUCTS_SUCCESS',
  'GET_VIEWED_PRODUCTS_ERROR',
);
