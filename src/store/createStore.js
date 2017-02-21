import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import {
  default as allReducers,
} from './combineReducers';

export default function configureStore(initialState = {}) {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = compose(
    applyMiddleware(...middlewares),
  )(createStore)(allReducers, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
}
