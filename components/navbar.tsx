import Link from 'next/link';
import { GithubIcon } from 'lucide-react';

import { Logo } from '~/components/ui/logo';
import { Button } from '~/components/ui/button';
import { ThemeToggle } from '~/components/theme-toggle';
import { SearchBar } from '~/components/search-bar';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="container flex h-14 items-center gap-2 md:gap-4 ">
        <Link href="/" className="flex items-center gap-1">
          <Logo size={20} />
          <div className="hidden whitespace-nowrap font-bold md:block">
            Next Market
          </div>
        </Link>

        <SearchBar />

        <div className="flex gap-1">
          <ThemeToggle />

          <Button variant="ghost" size="sm" className="p-2" asChild>
            <Link
              href="https://github.com/edwintantawi/next-market"
              target="_blank"
            >
              <GithubIcon size={20} />
              <span className="sr-only">Open github</span>
            </Link>
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            Login
          </Button>
          <Button size="sm">Register</Button>
        </div>
      </div>
    </nav>
  );
};
