import { handleActions } from 'redux-actions';

import {
  getDataListByPagination,
  getDataListByPaginationSuccess,
  getDataListByPaginationError,
  getDataListByPaginationReset,
} from './action';


const initialState = {
  buyProductList: {
    loading: false,
    error: false,
    data: [],
    page: 1,
    pages: 1,
  },
};

export default handleActions({
  [getDataListByPagination]: (
    state, {
      payload: {
        name,
      },
    },
  ) => ({
    ...state,
    [name]: {
      ...state[name],
      error: false,
      loading: true,
    },
  }),

  [getDataListByPaginationSuccess]: (
    state, {
      payload: {
        name,
        data,
        page,
        pages,
      },
    },
  ) => ({
    ...state,
    [name]: {
      ...state[name],
      error: false,
      loading: false,
      data,
      page,
      pages: pages || 0,
    },
  }),
  [getDataListByPaginationError]: (
    state, {
      payload: {
        name,
      },
    },
  ) => ({
    ...state,
    [name]: {
      ...state[name],
      error: true,
      loading: false,
    },
  }),
  [getDataListByPaginationReset]: (state, { payload: { name } }) => ({
    ...state,
    [name]: { ...initialState[name] },
  }),

}, initialState);
