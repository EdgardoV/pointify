import {products} from 'Api';
import {ProductType, ProductsInterface} from 'reactRedux/types/products.types';

async function get(): Promise<ProductsInterface> {
  const r = await products();
  const {data, status, statusText, request} = r;

  console.log('products.services.ts', request);

  if (status === 200) {
    const response = data
      .map((product: any) => ({
        id: product.id,
        product: product.product,
        points: product.points,
        image: product.image,
        isRedemption: product.is_redemption,
        createdAt: product.createdAt,
      }))
      .sort((a: any, b: any) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });

    const earned = response.filter(
      (product: ProductType) => !product.isRedemption,
    );

    const redeemed = response.filter(
      (product: ProductType) => product.isRedemption,
    );

    const total = response.reduce((acc: number, product: ProductType) => {
      if (product.isRedemption) {
        return acc + product.points;
      }
      return acc;
    }, 0);

    return {
      products: response,
      earned,
      redeemed,
      total,
    };
  }
  throw new Error(JSON.stringify(statusText) || 'unknown error');
}

export const productsServices = {
  get,
};
