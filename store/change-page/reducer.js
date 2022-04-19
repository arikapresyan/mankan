import { handleActions } from 'redux-actions';
import { changePage, resetChangePage } from './action';

const initialState = {
  route: '',
};

export default handleActions({
  [changePage]: (state, { payload: { route } }) => ({ ...state, route }),
  [resetChangePage]: (state) => ({ ...state, route: '' }),

}, initialState);

export const selectRedirectRoute = ({ redirectRoute }) => {
  return redirectRoute;
};
