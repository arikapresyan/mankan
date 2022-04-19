import { createActions } from 'redux-actions';

export const { getCurrantTime, setCurrantTime } = createActions(
  'GET_CURRANT_TIME',
  'SET_CURRANT_TIME',
);
