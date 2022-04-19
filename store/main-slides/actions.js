import { createActions } from 'redux-actions';

export const { getSlides, getSlidesSuccess, getSlidesError } = createActions(
  'GET_SLIDES',
  'GET_SLIDES_SUCCESS',
  'GET_SLIDES_ERROR',
);
