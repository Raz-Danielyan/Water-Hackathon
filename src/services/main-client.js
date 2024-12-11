import axios from 'axios';
// import Promise from 'bluebird';
import { notification } from 'antd';
import { getAccessToken, emptyState } from '../configs/local-storage';
import { API_ROOT } from '../configs/env-vars';
//
// Promise.config({
//   cancellation: true,
// });

// overwrite native Promise implementation with Bluebird's
// window.Promise = Promise;

// eslint-disable-next-line import/no-anonymous-default-export
export default (headers = {}) => {
  const service = axios.create({
    baseURL: API_ROOT, // url of the api
    headers: {
      Authorization: getAccessToken() ? 'Bearer '.concat(getAccessToken()) : '',
      ...headers,
    },
  });
  service.interceptors.response.use(
    response => response,
    error => {
      const errorResponse = error.response;
      if (process.env.NODE_ENV === 'production') {
        switch (errorResponse.status) {
          case 403:
            window.location.pathname = '/not-permitted';
            break;
          default:
            break;
        }
      }
      if (errorResponse.status === 401) {
        emptyState();
        window.location.href = '/sign-in';
      }
      if (errorResponse) {
        notification.error({
          message: 'Error',
          description:
            errorResponse?.data?.message?.[0]?.messages?.[0]?.message ||
            (typeof errorResponse?.data?.message === 'string' && errorResponse?.data?.message) ||
            'Something went wrong',
          maxCount: 1,
          duration: 0,
        });
      }
      throw error;
    }
  );
  return service;
};
