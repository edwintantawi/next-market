import { redirect } from 'next/navigation';

import { ProductList } from '~/components/product-list';
import { ProductItem } from '~/components/product-item';
import { Product } from '~/lib/types';

export default async function Search(props: { searchParams: { q?: string } }) {
  const response = await fetch(`${process.env['BASE_API_URL']}/products`);
  const products = (await response.json()) as Product[];

  const query = props.searchParams.q ?? '';
  if (query === '') redirect('/');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLocaleLowerCase()),
  );

  const isNotFound = filteredProducts.length === 0;

  return (
    <>
      <header className="space-y-2 pb-2 pt-6">
        <h1 className="text-3xl font-bold">Search Product: {query}</h1>
        {isNotFound && (
          <p className="text-sm text-muted-foreground">
            Could not find that product!
          </p>
        )}
      </header>

      <ProductList>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductList>
    </>
  );
}
