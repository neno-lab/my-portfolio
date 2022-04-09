import App from './app/app';
import configureStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const { store, persistor } = configureStore();

ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App/>
  </PersistGate>
</Provider>, document.getElementById('root'));
