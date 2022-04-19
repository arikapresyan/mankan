import { createActions } from 'redux-actions';

export const {
  wishlistGet,
  wishlistSet,
  wishlistSetItem,
  wishlistItemLoading,
  wishlistItemError,
  wishlistChangeItem,
  wishlistChangeItemSuccess,
  wishlistChangeItemError,
  wishlistPopulate,
  wishlistPopulateSuccess,
  wishlistPopulateError,
  wishlistPopulateLoading,
  wishlistProductsReset,
  wishlistError,

} = createActions(
  'WISHLIST_GET',
  'WISHLIST_SET',
  'WISHLIST_ERROR',
  'WISHLIST_ITEM_LOADING',
  'WISHLIST_ITEM_ERROR',
  'WISHLIST_CHANGE_ITEM',
  'WISHLIST_CHANGE_ITEM_SUCCESS',
  'WISHLIST_POPULATE',
  'WISHLIST_POPULATE_SUCCESS',
  'WISHLIST_POPULATE_ERROR',
  'WISHLIST_POPULATE_LOADING',
  'WISHLIST_PRODUCTS_RESET',


);
