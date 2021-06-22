import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { authReducer } from './auth/reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer)
});
