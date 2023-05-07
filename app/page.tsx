import { ProductList } from '~/components/product-list';
import { ProductItem } from '~/components/product-item';
import { Product } from '~/lib/types';

export default async function Home() {
  const response = await fetch(`${process.env['BASE_API_URL']}/products`);
  const products = (await response.json()) as Product[];

  return (
    <ProductList>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductList>
  );
}
