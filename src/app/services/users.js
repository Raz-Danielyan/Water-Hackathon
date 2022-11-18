import { createCustomApi } from '../../configs/rtk-query';

export const usersApi = createCustomApi({
  reducerPath: 'users',
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/projects',
    }),
    getLoggedUser: builder.query({
      query: id => `/projects/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery, useLazyGetLoggedUserQuery } = usersApi;
