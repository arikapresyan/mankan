/* eslint-disable no-mixed-operators */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './mainSaga';

import rootReducer from './mainReducer';

const window_ = typeof window !== 'undefined' ? window : {};
let composeEnhancers = compose;
if (window_ !== undefined && window_.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window_.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
