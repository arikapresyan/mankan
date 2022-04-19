import { handleActions } from 'redux-actions';

import {
  getMenuList,
  getMenuListSuccess,
  getMenuListError,
  getMenuListReset,
} from './action';

const initialState = {
  data: {
    type: [],
    age: [],
    brand: [],
    meaning: [],
  },
  loading: false,
  success: false,
  error: false,
  name: '',
  bestseller: null,
};

export default handleActions({
  [getMenuList]: () => ({
    ...initialState,
    loading: true,
  }),
  [getMenuListSuccess]: (state, { payload: { data, name, bestseller } }) => ({
    ...initialState,
    loading: false,
    success: true,
    data,
    name,
    bestseller,
  }),
  [getMenuListError]: () => ({
    ...initialState,
    loading: false,
    success: true,
  }),
  [getMenuListReset]: () => ({
    ...initialState,
  }),
}, initialState);

export const selectMenuListName = ({ menuList }) => menuList.name;
export const selectMenuList = ({ menuList }) => menuList;
