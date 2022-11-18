import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_ROOT } from './env-vars';
import { getAccessToken } from './local-storage';
import { removeUser } from '../app/slices/user';

const baseQuery = fetchBaseQuery({
  baseUrl: API_ROOT,
  prepareHeaders: headers => {
    const token = getAccessToken();
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithAuth = () => async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(removeUser());
    window.location.href = '/sign-in';
  }
  return result;
};

export const createCustomApi = params =>
  createApi({
    baseQuery: baseQueryWithAuth(),
    ...params,
  });
