import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './catalog/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

const persistedCarsReducer = persistReducer(
  favoritesPersistConfig,
  carsReducer
);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
