import {combineReducers} from '@reduxjs/toolkit';
import {RootReducer} from '../types';
import ProductsReducer from './products.reducer';
import AppReducer from './app.reducer';

export const rootReducer = combineReducers<RootReducer>({
  app: AppReducer,
  products: ProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
