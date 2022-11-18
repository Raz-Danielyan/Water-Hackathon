import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './services/users';
import { authApi } from './services/auth';
import user from './slices/user';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([usersApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);
