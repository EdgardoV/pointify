import {Action, AnyAction} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../reducers';
import {ProductsInterface} from './products.types';
import {AppInterface} from './app.types';

export type ThunkActionType = ThunkAction<void, RootState, unknown, AnyAction>;
export type Dispatcher = (action: ThunkActionType | Action) => void;

export type RootReducer = {
  app: AppInterface;
  products: ProductsInterface;
};
