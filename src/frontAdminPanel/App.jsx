import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persisted } from './store';
import { Layout } from './components';
import { AppRouter } from './routes';

import './reset.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persisted}>
        <Router>
          <Layout>
            <AppRouter />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
};
