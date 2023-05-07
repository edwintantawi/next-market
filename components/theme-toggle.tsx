'use client';

import { Laptop2Icon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Button } from '~/components/ui/button';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  console.log({ theme });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2">
          <SunIcon
            size={20}
            className="rotate-0 scale-100 transition-transform duration-700 dark:-rotate-90 dark:scale-0"
          />
          <MoonIcon
            size={20}
            className="absolute rotate-90 scale-0 transition-transform duration-700 dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Open theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Themes</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('light')}
          >
            <SunIcon className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('dark')}
          >
            <MoonIcon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('system')}
          >
            <Laptop2Icon className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
