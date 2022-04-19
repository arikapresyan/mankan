import { handleActions } from 'redux-actions';

import {
  changeGlobalInformationRouter,
  resetGlobalInformationRouter,
} from './action';

const initialState = {};


export default handleActions({
  [changeGlobalInformationRouter]: (
    state, { payload },
  ) => ({
    ...state, ...payload,
  }),

  [resetGlobalInformationRouter]: () => initialState,
}, initialState);
