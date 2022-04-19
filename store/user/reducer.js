import { handleActions } from 'redux-actions';

import {
  loginSuccess,
  logoutSuccess,
  resetUserReducer,
  authorizationError,
  setLang,
  authorizationLoading,
  getUserDataLoading,
  getUserDataSuccess,
  getUserDataError,
} from './action';


const initialState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  errorText: null,
  lang: 'ARM',
  loading: false,
  authSuccess: false,
  fetchingInitialUserData: true,
};


export default handleActions({
  [loginSuccess]: (
    state,
    {
      payload,
    },
  ) => ({
    ...state,
    ...payload,
    loading: false,
    authSuccess: true,
  }),
  [authorizationError]: (state, { payload: { errorText } }) => ({
    ...state,
    errorText,
    loading: false,
    authSuccess: false,
  }),
  [setLang]: (state, { payload: { lang } }) => ({
    ...state,
    lang,
  }),

  [authorizationLoading]: (store) => ({ ...store, loading: true }),
  [getUserDataLoading]: (store) => ({ ...store, fetchingInitialUserData: true }),

  [getUserDataSuccess]: (store, { payload }) => ({
    ...store, authSuccess: true, fetchingInitialUserData: false, ...payload,
  }),
  [getUserDataError]: (state) => ({ ...initialState, fetchingInitialUserData: false, lang: state.lang }),
  [resetUserReducer]: () => ({ ...initialState, fetchingInitialUserData: false }),
  [logoutSuccess]: () => ({ ...initialState, fetchingInitialUserData: false }),
}, initialState);


export const selectAuthorized = ({ user }) => user.authSuccess;
export const selectUser = ({ user }) => user;
export const selectLang = ({ user: { lang } }) => lang;
