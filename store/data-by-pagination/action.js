import { createActions } from 'redux-actions';


export const {
  getDataListByPagination,
  getDataListByPaginationSuccess,
  getDataListByPaginationError,
  getDataListByPaginationReset,
} = createActions(
  'GET_DATA_LIST_BY_PAGINATION',
  'GET_DATA_LIST_BY_PAGINATION_SUCCESS',
  'GET_DATA_LIST_BY_PAGINATION_ERROR',
  'GET_DATA_LIST_BY_PAGINATION_RESET',
);
