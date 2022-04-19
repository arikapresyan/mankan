import { createActions } from 'redux-actions';

export const {
  catalogGet,
  catalogGetSuccess,
  catalogGetError,
  catalogSetPage,
  catalogLoading,
} = createActions(
  'CATALOG_GET',
  'CATALOG_GET_SUCCESS',
  'CATALOG_GET_ERROR',
  'CATALOG_SET_PAGE',
  'CATALOG_LOADING',
);
