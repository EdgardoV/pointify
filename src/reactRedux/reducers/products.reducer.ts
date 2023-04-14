import {ProductActionTypes, ProductsInterface, SAVE_PRODUCTS} from '../types';

const initialState: ProductsInterface = {
  products: [],
  earned: [],
  redeemed: [],
  total: 0,
};

export default function ProductsReducer(
  state: ProductsInterface = initialState,
  action: ProductActionTypes,
): ProductsInterface {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.data.products,
        earned: action.data.earned,
        redeemed: action.data.redeemed,
        total: action.data.total,
      };
    default:
      return state;
  }
}
