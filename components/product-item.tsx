import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';

import { Product } from '~/lib/types';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { Badge } from '~/components/ui/badge';
import { Separator } from '~/components/ui/separator';
import { MotionDiv } from '~/components/motion-div';

export const ProductItem = ({ product }: { product: Product }) => {
  return (
    <li>
      <Link href={`/products/${product.id}`}>
        <article className="z-0 h-full rounded-lg border bg-background p-2 shadow hover:bg-gray-50 dark:hover:bg-gray-900 md:p-4">
          <MotionDiv layoutId={String(product.id)}>
            <AspectRatio ratio={1 / 1}>
              <Image
                fill
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 25vw"
                placeholder="blur"
                src={product.image}
                blurDataURL={product.image}
                alt={product.title}
                className="rounded-md border bg-white object-contain p-4 "
              />
            </AspectRatio>
          </MotionDiv>
          <Badge className="my-2">{product.category}</Badge>
          <h2 className="mb-1 line-clamp-2 text-xs  md:text-sm">
            <span title={product.title}>{product.title}</span>
          </h2>
          <p className="mb-2 text-base font-bold md:text-lg">
            ${product.price}
          </p>
          <div className="flex items-center gap-1">
            <StarIcon size={16} className="fill-yellow-500 text-yellow-500" />
            <div className="flex h-4 items-center space-x-1 text-xs text-muted-foreground md:space-x-2">
              <span>{product.rating.rate}</span>
              <Separator orientation="vertical" />
              <span>{product.rating.count} Sold out</span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};
