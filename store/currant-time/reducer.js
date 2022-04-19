import { handleActions } from 'redux-actions';
import { setCurrantTime } from './action';

const initialState = {
  currantTime: null,
};
export default handleActions({
  [setCurrantTime]: (state, { payload: { currantTime } }) => ({ ...state, currantTime }),
}, initialState);

export const selectCurrantDate = ({ currantTime: { currantTime } }) => currantTime;
