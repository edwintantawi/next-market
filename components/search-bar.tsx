'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';

import { Input } from '~/components/ui/input';

export const SearchBar = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get('query');

    router.push(`/search?q=${query}`);
    searchInputRef.current?.blur();
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        ref={searchInputRef}
        name="query"
        placeholder="Find your dream products"
        className="h-9"
      />
      <input type="submit" hidden />
    </form>
  );
};
