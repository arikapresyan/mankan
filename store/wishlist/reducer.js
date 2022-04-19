import { handleActions } from 'redux-actions';

import {
  wishlistSet,
  wishlistGet,
  wishlistItemLoading,
  wishlistItemError,
  wishlistChangeItemSuccess,
  wishlistPopulateLoading,
  wishlistPopulateError,
  wishlistPopulateSuccess,
  wishlistProductsReset,
  wishlistError,
} from './action';

const initialState = {
  productIds: {},
  products: [],
  loading: {},
  populateLoading: false,
  loadWishlist: false,
  wishlistError: false,
};

export default handleActions({
  [wishlistSet]: (
    state,
    {
      payload: { products, productIds },
    },
  ) => ({
    ...state,
    products,
    productIds: {
      ...(productIds || {}),
    },
    loadWishlist: false,
    wishlistError: false,
  }),
  [wishlistGet]: (state) => ({
    ...state,
    loadWishlist: true,
    wishlistError: false,
  }),
  [wishlistError]: (state) => ({
    ...state,
    loadWishlist: false,
    wishlistError: true,
  }),
  [wishlistItemLoading]: (
    state,
    {
      payload: { id },
    },
  ) => ({
    ...state,
    loading: {
      ...state.loading,
      [id]: true,
    },
  }),
  [wishlistChangeItemSuccess]: (
    state,
    {
      payload: {
        wishlistIds,
        wishlist,
        id,
      },
    },
  ) => ({
    ...state,
    productIds: wishlistIds,
    wishlist: (wishlist || state.wishlist),
    loading: {
      ...state.loading,
      [id]: false,
    },
  }),
  [wishlistItemError]: (
    state, {
      payload: { product: { id } },
    },
  ) => ({
    ...state,
    loading: {
      ...state.loading,
      [id]: false,
    },
  }),
  [wishlistPopulateLoading]: (state) => ({
    ...state,
    populateLoading: true,
  }),

  [wishlistPopulateSuccess]: (state, { payload: { wishlistIds } }) => ({
    ...state,
    populateLoading: false,
    productIds: wishlistIds,
  }),
  [wishlistPopulateError]: (state) => ({
    ...state,
    populateLoading: false,
  }),
  [wishlistProductsReset]: (state) => ({
    ...state,
    products: [],
  }),
}, initialState);


export const selectWishlistIds = ({ wishlist: { productIds } }) => productIds;

export function getWishlist({ wishlist: { products } }) {
  return products;
}
export function getWishlistLength({ wishlist: { productIds } }) {
  return Object.keys(productIds).length;
}
