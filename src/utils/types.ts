import {ProductType} from 'reactRedux/types';

export type ProductsType = 'earned' | 'redeemed' | 'all';

export type AppStackParams = {
  ProductsStack: undefined;
};

export type ProductsStackParams = {
  Dashboard: undefined;
  Details: {data: ProductType};
};
