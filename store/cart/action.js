import { createActions } from 'redux-actions';


export const {
  changeCart,
  changeCartSuccess,
  changeCartError,
  changeCartReset,
  cartSetAll,
  cartChangeProduct,
  cartRemoveProduct,
  resetCartReducer,
  populateCart,
  sendOrder,
  sendOrderSuccess,
  sendOrderError,
} = createActions(


  'CHANGE_CART',
  'CHANGE_CART_SUCCESS',
  'CHANGE_CART_ERROR',
  'CHANGE_CART_RESET',

  'CART_SET_ALL',
  'CART_CHANGE_PRODUCT',
  'CART_REMOVE_PRODUCT',
  'RESET_CART_REDUCER',

  'POPULATE_CART',
  'SEND_ORDER',
  'SEND_ORDER_SUCCESS',
  'SEND_ORDER_ERROR',
);
