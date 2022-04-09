import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';

import { applyMiddleware, createStore } from 'redux';

const createLoggerMiddleware = () => createLogger({
  collapsed: true
});

const createMiddleWare = () => applyMiddleware(createLoggerMiddleware());

const configureStore = () => {
  const store = createStore(rootReducer, createMiddleWare());
  const persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
export default configureStore;
