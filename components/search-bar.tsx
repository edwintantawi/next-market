'use client';

import { useRouter } from 'next/navigation';
import { Input } from '~/components/ui/input';

export const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get('query');

    router.push(`/search?q=${query}`);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        name="query"
        placeholder="Find your dream products"
        className="ml-2 h-9"
      />
      <input type="submit" hidden />
    </form>
  );
};
