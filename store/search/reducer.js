import { handleActions } from 'redux-actions';
import {
  searchProduct,
  searchProductSuccess,
  searchProductError,
  searchProductReset,
} from './action';


const initialState = {
  loading: false,
  error: false,
  data: null,
};

export default handleActions({
  [searchProduct]: () => ({
    loading: true,
    error: false,
    data: null,
  }),
  [searchProductSuccess]: (state, { payload: { data } }) => ({
    loading: false,
    error: false,
    data,
  }),
  [searchProductError]: () => ({
    loading: true,
    error: true,
    data: null,
  }),
  [searchProductReset]: () => ({
    loading: false,
    error: false,
    data: null,
  }),
}, initialState);

export const selectSearchData = ({ search: { data } }) => data;
export const selectSearchDataLoading = ({ search: { loading } }) => loading;
