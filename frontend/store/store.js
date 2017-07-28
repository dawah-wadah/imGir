import {
  createStore,
  applyMiddleware
} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {

  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    const {
      createLogger
    } = require('redux-logger');
    middlewares.push(createLogger());
  }

  return (
    createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
