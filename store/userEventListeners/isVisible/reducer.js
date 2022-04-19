import { handleActions } from 'redux-actions';
import {
  toggleVisibility, hide, hideAll, show,
} from '../action';

const initialState = {
  isFilterListOpen: false,
  isCategoryMenuOpen: false,
  isCategorySubMenuOpen: false,
  suggestionVisible: false,
  callbackVisible: false,
  closeAllSideBars: false,
  registrationVisible: false,
  loginVisible: false,
  forgotVisible: false,
  fixedSearchVisible: false,
  filterModalVisible: false,
};

export default handleActions({
  [show]: (state, { payload: { name } }) => ({
    ...state, [name]: true,
  }),
  [hide]: (state, { payload: { name } }) => ({
    ...state, [name]: false,
  }),
  [toggleVisibility]: (state, { payload: { name } }) => ({
    ...state, [name]: !state[name],
  }),
  [hideAll]: () => (initialState),
}, initialState);
