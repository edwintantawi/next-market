import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';

import { Product } from '~/lib/types';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="relative rounded-lg border p-4 shadow hover:bg-gray-50">
      <AspectRatio ratio={1 / 1}>
        <Image
          fill
          placeholder="blur"
          src={product.image}
          blurDataURL={product.image}
          alt={product.title}
          className="rounded-md border bg-white object-contain p-4"
        />
      </AspectRatio>
      <Badge className="my-2">{product.category}</Badge>
      <h2 className="mb-1 line-clamp-2 text-sm">
        <Link
          href={`/products/${product.id}`}
          className="before:absolute before:inset-0 before:content-['']"
        >
          <span title={product.title}>{product.title}</span>
        </Link>
      </h2>
      <p className="mb-1 text-lg font-bold">${product.price}</p>
      <div className="flex items-center gap-2">
        <StarIcon size={16} className="fill-yellow-500 text-yellow-500" />
        <div className="flex h-4 items-center space-x-2 text-xs text-muted-foreground">
          <span>{product.rating.rate}</span>
          <Separator orientation="vertical" />
          <span>{product.rating.count} Sold out</span>
        </div>
      </div>
    </article>
  );
};
