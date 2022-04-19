
import { handleActions } from 'redux-actions';
import {
  catalogGetSuccess,
  catalogGetError,
  catalogSetPage,
  catalogGet,
} from './action';


const initialState = {
  products: [],
  page: 1,
  pagesCount: 0,
  loading: false,
  error: false,
};

export default handleActions({

  [catalogGet]: (state) => ({ ...state, loading: true, error: false }),
  [catalogGetSuccess]: (
    state,
    {
      payload: {
        products, pagesCount, page,
      },
    },
  ) => ({
    ...state,
    products,
    pagesCount,
    page: page || 1,
    loading: false,
    error: false,
  }),
  [catalogGetError]: (state) => ({

    ...state,
    loading: false,
    error: true,
  }),
  [catalogSetPage]: (state, { payload: { page } }) => ({ ...state, page }),

}, initialState);
