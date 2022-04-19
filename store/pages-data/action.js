import { createActions } from 'redux-actions';

export const {
  getPageData,
  getPageDataSuccess,
  getPageDataError,
  resetPageData,
} = createActions(
  'GET_PAGE_DATA',
  'GET_PAGE_DATA_SUCCESS',
  'GET_PAGE_DATA_ERROR',
  'RESET_PAGE_DATA',
);
