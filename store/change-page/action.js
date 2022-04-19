import { createActions } from 'redux-actions';

export const { changePage, resetChangePage } = createActions('CHANGE_PAGE', 'RESET_CHANGE_PAGE');
