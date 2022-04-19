import { createActions } from 'redux-actions';


export const {
  catalogFilterChange,
  catalogFilterChangeSuccess,
  catalogFilterChangeError,
  resetCatalogFilterReducer,
  catalogFilterSetValues,
  catalogSetFilters,
  resetFilterView,
  catalogMainSearch,
} = createActions(
  'CATALOG_FILTER_CHANGE',
  'CATALOG_FILTER_CHANGE_SUCCESS',
  'CATALOG_FILTER_CHANGE_ERROR',
  'RESET_CATALOG_FILTER_REDUCER',
  'CATALOG_FILTER_SET_VALUES',
  'CATALOG_SET_FILTERS',
  'RESET_FILTER_VIEW',
  'CATALOG_MAIN_SEARCH',
);
