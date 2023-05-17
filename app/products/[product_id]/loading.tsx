import { Separator } from '~/components/ui/separator';
import { Skeleton } from '~/components/ui/skeleton';

export default function ProductLoading() {
  return (
    <article className="grid grid-cols-1 gap-6 md:grid-cols-[0.7fr,1fr] md:gap-12 xl:grid-cols-2">
      <Skeleton className="aspect-square w-full" />

      <div>
        <Skeleton className="my-2 h-[22px] w-24 rounded-full" />

        <Skeleton className="mb-1 h-8 w-full rounded-full" />
        <Skeleton className="mb-2 h-8 w-10/12 rounded-full" />

        <Skeleton className="mb-4 h-5 w-36 rounded-full" />

        <Skeleton className="mb-2 h-10 w-28 rounded-full" />

        <Separator className="my-4" />

        <Skeleton className="mb-1 h-6 w-full rounded-full" />
        <Skeleton className="mb-1 h-6 w-full rounded-full" />
        <Skeleton className="mb-1 h-6 w-full rounded-full" />
        <Skeleton className="mb-3 h-6 w-8/12 rounded-full" />
      </div>
    </article>
  );
}
