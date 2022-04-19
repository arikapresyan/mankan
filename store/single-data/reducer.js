import { handleActions } from 'redux-actions';
import {
  getSingleData,
  getSingleDataError,
  getSingleDataSuccess,
  resetSingleData,
} from './action';

const initialState = {
  paymentDelivery: {
    loading: false,
    error: false,
    data: null,
  },
  promoCode: {
    loading: false,
    error: false,
    data: null,
  },
  usage: {
    loading: false,
    error: false,
    data: null,
  },
};
export default handleActions({
  [getSingleData]: (state, { payload: { data: { name } } }) => ({
    ...state,
    [name]:
    { loading: true },
  }),
  [getSingleDataSuccess]: (state, {
    payload:
     { data, name },
  }) => ({
    ...state,
    [name]: {
      loading: false,
      data,
    },
  }),
  [getSingleDataError]: (state, { payload: { name } }) => ({
    ...state,
    [name]: {
      loading: false, error: true,
    },
  }),
  [resetSingleData]: (state, { payload: { name } }) => (name ? ({
    ...state,
    [name]: {
      loading: false,
      error: false,
      data: null,
    },
  }) : { ...initialState }),

}, initialState);

export const selectSingleData = ({ singleData }) => singleData;
