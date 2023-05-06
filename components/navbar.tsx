import Link from 'next/link';
import { GithubIcon } from 'lucide-react';

import { Logo } from '~/components/ui/logo';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { ThemeToggle } from '~/components/theme-toggle';

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex h-14 items-center gap-2 md:gap-4 ">
        <Link href="/" className="flex items-center gap-1">
          <Logo size={20} />
          <div className="hidden whitespace-nowrap font-bold md:block">
            Next Market
          </div>
        </Link>

        <Input placeholder="Find your dream products" className="ml-2 h-9" />

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
