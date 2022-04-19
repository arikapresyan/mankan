import { handleActions } from 'redux-actions';

import {
  APILoading,
  APIError,
  APISuccess,
  APIClear,
} from './action';


const initialState = {
  status: null,
  data: null,
  isVisible: false,
  loading: false,
  responseText: '',
  hasError: false,
  success: null,
};


export default handleActions({
  [APILoading]: (
    state,
  ) => ({
    ...state, loading: true,
  }),

  [APIError]: (state, { payload: { responseText, status } }) => ({
    ...state,
    status,
    isVisible: true,
    loading: false,
    responseText,
    hasError: true,
  }),
  [APISuccess]: (state, { payload: { responseText, status } }) => ({
    ...state,
    loading: false,
    responseText,
    status,
    isVisible: true,
    hasError: false,
    success: true,
  }),
  [APIClear]: () => initialState,
}, initialState);
