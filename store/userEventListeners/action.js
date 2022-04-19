import { createActions } from 'redux-actions';

export const {
  show,
  hide,
  hideAll,
  toggleVisibility,
} = createActions(
  'SHOW',
  'HIDE',
  'HIDE_ALL',
  'TOGGLE_VISIBILITY',
);
