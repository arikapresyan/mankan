import { handleActions } from 'redux-actions';

import keys from '../../constants/keys';

import {
  catalogFilterChange,
  catalogFilterChangeSuccess,
  catalogFilterChangeError,
  resetCatalogFilterReducer,
  catalogFilterSetValues,
  catalogSetFilters,
  resetFilterView,
} from './action';

const initialState = {
  classification: [],
  price: [keys.DEFAULT_PRICE[0], keys.DEFAULT_PRICE[1]],
  gender: [],
  age: [],
  type: [],
  meaning: [],
  brand: [],
  isUserFilter: false,
  loading: false,
  filters: {
    brand: [],
    productSex: [],
    extraFilter: [],
    productAge: [],
    productType: [],
    productUsage: [],
    searchWord: '',
  },
};

export default handleActions({
  [catalogFilterChangeSuccess]: (
    state, { payload: { name, value } },
  ) => ({
    ...state,
    [name]: value,
    loading: false,
  }),
  [catalogFilterSetValues]: (state, { payload }) => ({ ...state, ...payload, loading: false }),
  [resetFilterView]: (state, { payload: { exception } }) => ({
    ...state,
    classification: [],
    price: [keys.DEFAULT_PRICE[0], keys.DEFAULT_PRICE[1]],
    gender: [],
    age: [],
    type: [],
    meaning: [],
    brand: [],
    [exception]: state[exception],

  }),
  [catalogFilterChange]: (state) => ({ ...state, loading: true }),
  [catalogSetFilters]: (state, { payload: { filters } }) => ({ ...state, filters }),
  [resetCatalogFilterReducer]: (state, { payload: { resetSearchWord } = {} }) => ({
    ...initialState,
    filters: {
      ...initialState.filters,
      searchWord: resetSearchWord ? '' : state.filters.searchWord,
    },
  }),
  [catalogFilterChangeError]: (state) => ({ ...initialState, filters: { ...initialState.filters, searchWord: state.filters.searchWord } }),

}, initialState);


export const clearFilters = (store) => {
  const filters = { ...store.catalogFilter };
  const keysArray = Object.keys(filters);

  keysArray.forEach((key) => {
    if (!filters[key].length && key !== 'searchWord') {
      delete filters[key];
    }
  });

  return filters;
};

export const getIsUserFilter = (store) => !!store.catalogFilter.isUserFilter;

export const selectCatalogFilters = ({ catalogFilter }) => catalogFilter.filters;

export const getCatalogFilterByName = (name) => ({ catalogFilter }) => catalogFilter[name];
