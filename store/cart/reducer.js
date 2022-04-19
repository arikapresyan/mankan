import { handleActions } from 'redux-actions';

import {
  cartChangeProduct,
  resetCartReducer,
  changeCart,
  changeCartSuccess,
  changeCartError,
  cartSetAll,
  sendOrder,
  sendOrderSuccess,
  sendOrderError,
} from './action';
import { addLoadingItems } from './handleFunctions';


const initialState = {
  loading: {},
  error: false,
  data: {},
  order: {
    loading: false,
    error: false,
  },
  cartSetCounter: 0,
};

export default handleActions({


  [changeCart]: (state, { payload: { ids } }) => ({
    ...state,
    loading: addLoadingItems(state, ids),
    error: false,
  }),

  [changeCartSuccess]: (state, { payload: { id, data } }) => ({
    ...state,
    loading: { ...state.loading, [id]: false },
    error: false,
    data,
  }),
  [changeCartError]: (state, { payload: { ids } }) => ({
    ...state,
    loading: { ...state.loading, loading: addLoadingItems(state, ids, true) },
    error: true,
  }),

  [cartChangeProduct]: (
    state,
    { payload: { id, changes } },
  ) => ({
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...state[id],
        ...changes,
      },
    },
  }),

  [cartSetAll]: (state, { payload: { cart } }) => ({
    ...state,
    data: cart,
    cartSetCounter: state.cartSetCounter + 1,
  }),
  [resetCartReducer]: (state) => ({ ...initialState, cartSetCounter: state.cartSetCounter }),
  [sendOrder]: (state) => ({
    ...state,
    order: {
      error: false,
      loading: true,
    },
  }),
  [sendOrderSuccess]: (state) => ({ ...state, data: {}, order: { error: false, loading: false } }),
  [sendOrderError]: (state) => ({ ...state, order: { error: true, loading: false } }),

}, initialState);


export function getTotalPrice(store) {
  const { cart: { data } } = store;
  const keys = Object.keys(data);
  let total = 0;

  keys.forEach((key) => {
    total += ((data[key] && data[key].price) || 200) * ((data[key] && data[key].count) || 1);
  });
  return total;
}

export function getTotalCount(store) {
  const { cart } = store;
  return Object.keys(cart.data).length;
}


export const selectCart = ({ cart }) => cart.data;
