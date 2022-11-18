import { createCustomApi } from '../../configs/rtk-query';

export const authApi = createCustomApi({
  reducerPath: 'authApi',
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/local',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
