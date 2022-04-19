import { createActions } from 'redux-actions';

export const {
  getSingleData,
  getSingleDataError,
  getSingleDataSuccess,
  resetSingleData,
} = createActions(
  'GET_SINGLE_DATA',
  'GET_SINGLE_DATA_ERROR',
  'GET_SINGLE_DATA_SUCCESS',
  'RESET_SINGLE_DATA',
);
