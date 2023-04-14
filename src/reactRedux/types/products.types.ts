export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

export type ProductType = {
  id: string;
  createdAt: string;
  product: string;
  points: number;
  image: string;
  isRedemption: boolean;
};

export interface ProductsInterface {
  products: ProductType[];
  redeemed: ProductType[];
  earned: ProductType[];
  total: number;
}

interface SaveProductAction {
  type: typeof SAVE_PRODUCTS;
  data: ProductsInterface;
}

export type ProductActionTypes = SaveProductAction;
