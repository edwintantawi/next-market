import { ProductCard } from '~/components/product-card';
import { Product } from '~/lib/types';

export default async function Home() {
  const response = await fetch(`${process.env['BASE_API_URL']}/products`);
  const products = (await response.json()) as Product[];

  return (
    <main className="grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
