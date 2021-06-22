import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import { reducers } from './reducers';

export const store =
  process.env.REACT_APP_STAGE === 'dev'
    ? createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
    : createStore(reducers, applyMiddleware(thunk));

export const persisted = persistStore(store);

