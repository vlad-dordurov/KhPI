import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { authReducer } from './auth/reducer';
import { newsReducer } from './news/reducer';
import { notificationsReducer } from './notifications/reducer';
import { practicesReducer } from './practices/reducer';
import { practicePollsReducer } from './practicePolls/reducer';
import { dualPollsReducer } from './dualPolls/reducer';
import { dvvPollsReducer } from './dvvPolls/reducer';
import { dualsReducer } from './dual/reducer';
import { dvvsReducer } from './dvv/reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  news: newsReducer,
  notifications: notificationsReducer,
  practices: practicesReducer,
  practicePolls: practicePollsReducer,
  dualPolls: dualPollsReducer,
  dvvPolls: dvvPollsReducer,
  duals: dualsReducer,
  dvvs: dvvsReducer,
});
