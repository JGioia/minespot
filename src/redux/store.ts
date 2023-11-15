import { configureStore } from '@reduxjs/toolkit'
import counter from './counter'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({money: counter});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)

export type IRootState = ReturnType<typeof rootReducer>;