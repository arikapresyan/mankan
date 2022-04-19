import { createActions } from 'redux-actions';

export const {
  changeGlobalInformationRouter,
  resetGlobalInformationRouter,
} = createActions(
  'CHANGE_GLOBAL_INFORMATION_ROUTER',
  'RESET_GLOBAL_INFORMATION_ROUTER_SET',
);
