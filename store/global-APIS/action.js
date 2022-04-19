import { createActions } from 'redux-actions';


export const {
  globalApiSend: APISend,
  globalApiLoading: APILoading,
  globalApiError: APIError,
  globalApiSuccess: APISuccess,
  globalApiClear: APIClear,
} = createActions(
  'GLOBAL_API_SEND',
  'GLOBAL_API_LOADING',
  'GLOBAL_API_ERROR',
  'GLOBAL_API_SUCCESS',
  'GLOBAL_API_CLEAR',
);
