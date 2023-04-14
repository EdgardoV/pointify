import {api} from './api';
export const products = () =>
  api.get('api/v1/products', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  });
