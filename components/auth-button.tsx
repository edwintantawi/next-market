'use client';

import { signIn, signOut } from 'next-auth/react';
import { LogInIcon, LogOutIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

export const SignInButton = () => {
  return (
    <Button
      size="sm"
      className="whitespace-nowrap"
      onClick={() => signIn('google')}
    >
      <LogInIcon size={20} className="mr-2" />
      Sign In
    </Button>
  );
};

export const SignOutButton = () => {
  return (
    <Button
      variant="destructive"
      size="sm"
      className="w-full justify-start whitespace-nowrap"
      onClick={() => signOut()}
    >
      <LogOutIcon size={20} className="mr-2" />
      Sign Out
    </Button>
  );
};
