'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button, ButtonProps } from '~/components/ui/button';

// use router back for persistent scroll position
// when using next/link, the scroll position is reset
// even add scroll props to false
export const BackButton = ({ children, ...props }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <Button variant="secondary" onClick={handleClick} {...props}>
      <ArrowLeftIcon size={20} className="mr-1" />
      {children}
    </Button>
  );
};
