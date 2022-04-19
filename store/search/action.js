import { createActions } from 'redux-actions';


export const {
  searchProduct,
  searchProductSuccess,
  searchProductError,
  searchProductReset,
} = createActions(
  'SEARCH_PRODUCT',
  'SEARCH_PRODUCT_SUCCESS',
  'SEARCH_PRODUCT_ERROR',
  'SEARCH_PRODUCT_RESET',
);
