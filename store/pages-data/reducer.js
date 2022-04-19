import { handleActions } from 'redux-actions';
import {
  getPageData,
  getPageDataError,
  getPageDataSuccess,
  resetPageData,
} from './action';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: null,
  page: null,
  id: null,
  helperData: null,
};

export default handleActions({
  [getPageData]: (state) => ({
    helperData: state.helperData,
    id: state.id,
    page: state.page,
    loading: true,
    error: false,
    success: false,
    data: null,
  }),
  [getPageDataSuccess]: (state, {
    payload: {
      data, page, id, helperData,
    },
  }) => ({
    loading: false,
    error: false,
    success: true,
    data,
    page,
    id: id || null,
    helperData,
  }),
  [getPageDataError]: () => ({ ...initialState, error: true }),
  [resetPageData]: () => ({ ...initialState }),
}, initialState);


export const selectCurrentPage = ({ pageData }) => pageData.page;
export const selectPageId = ({ pageData }) => pageData.id;

export const selectHelperData = ({ pageData }) => pageData.helperData;
export const selectPageData = ({ pageData }) => pageData.data;

export const selectFullPageData = ({ pageData }) => pageData;
