import { handleActions } from 'redux-actions';
import { getSlides, getSlidesSuccess, getSlidesError } from './actions';

const initialState = {
  data: [],
  error: false,
  loading: true,
};

export default handleActions({
  [getSlides]: (state) => ({
    ...state,
    loading: true,
    error: false,
  }),
  [getSlidesSuccess]: (state, { payload: { data } }) => ({
    data,
    loading: false,
    error: false,
  }),
  [getSlidesError]: (state) => ({
    ...state,
    loading: false,
    error: true,
  }),
}, initialState);
