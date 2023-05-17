import Image from 'next/image';
import { StarIcon } from 'lucide-react';

import { AspectRatio } from '~/components/ui/aspect-ratio';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { Product } from '~/lib/types';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: { product_id: string };
}) {
  const response = await fetch(
    `${process.env['BASE_API_URL']}/products/${params.product_id}`,
  );
  const product = (await response.json().catch(notFound)) as Product;

  return (
    <article className="grid grid-cols-1 gap-6 md:grid-cols-[0.7fr,1fr] md:gap-12 xl:grid-cols-2">
      <AspectRatio ratio={1 / 1}>
        <Image
          fill
          sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 25vw"
          placeholder="blur"
          src={product.image}
          blurDataURL={product.image}
          alt={product.title}
          className="rounded-md border bg-white object-contain p-12 shadow-sm"
        />
      </AspectRatio>
      <div>
        <header className="">
          <Badge className="my-2">{product.category}</Badge>

          <h1 className="mb-2 text-base font-bold md:text-2xl lg:text-2xl">
            Product Detail: {product.title}
          </h1>

          <div className="mb-4 flex items-center gap-1">
            <StarIcon size={16} className="fill-yellow-500 text-yellow-500" />
            <div className="flex h-4 items-center space-x-1 text-xs text-muted-foreground md:space-x-2 md:text-sm">
              <span>{product.rating.rate}</span>
              <Separator orientation="vertical" />
              <span>{product.rating.count} Sold out</span>
            </div>
          </div>

          <p className="mb-2 text-xl font-bold md:text-4xl">${product.price}</p>
        </header>
        <Separator className="my-4" />
        <p className="mb-3 text-xs text-muted-foreground md:text-base">
          {product.description}
        </p>
      </div>
    </article>
  );
}
