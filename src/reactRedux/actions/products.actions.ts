import {productsServices} from '../../services';
import {
  ProductActionTypes,
  ProductsInterface,
  SAVE_PRODUCTS,
  ThunkActionType,
} from '../types';

export const saveProducts = (data: ProductsInterface): ProductActionTypes => ({
  type: SAVE_PRODUCTS,
  data: data,
});

export function getProducts(): ThunkActionType {
  return async dispatch => {
    try {
      const products = await productsServices.get();

      dispatch(saveProducts(products));
    } catch (error: any) {
      console.log(error);
    }
  };
}
