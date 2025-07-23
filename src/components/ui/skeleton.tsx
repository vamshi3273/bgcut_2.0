import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-foreground/10 animate-pulse rounded-md duration-[1.5s]', className)}
      {...props}
    />
  );
}

export { Skeleton };
