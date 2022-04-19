import { createActions } from 'redux-actions';

export const {
  getMenuList,
  getMenuListSuccess,
  getMenuListError,
  getMenuListReset,
} = createActions(
  'GET_MENU_LIST',
  'GET_MENU_LIST_SUCCESS',
  'GET_MENU_LIST_ERROR',
  'GET_MENU_LIST_RESET',
);
