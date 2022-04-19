import { createActions } from 'redux-actions';

export const {
  getProductToBuy,
  getProductToBuySuccess,
  getProductToBuyError,
  getProductToBuyReset,
} = createActions(
  'GET_PRODUCT_TO_BUY',
  'GET_PRODUCT_TO_BUY_SUCCESS',
  'GET_PRODUCT_TO_BUY_ERROR',
  'GET_PRODUCT_TO_BUY_RESET',
);
