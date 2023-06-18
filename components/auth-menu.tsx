import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '~/components/ui/popover';
import { SignInButton, SignOutButton } from '~/components/auth-button';
import { getCurrentUser } from '~/lib/session';

export const AuthMenu = async () => {
  const { isAuthenticated, user } = await getCurrentUser();

  if (!isAuthenticated) return <SignInButton />;

  const initialName = user?.name?.[0] ?? '-';

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage
            src={user?.image ?? undefined}
            alt={user?.name ?? undefined}
          />
          <AvatarFallback>{initialName}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-60 space-y-2">
        <div className="space-y-0.5 rounded-sm border px-3 py-2">
          <p className="truncate text-xs font-semibold">{user?.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {user?.email}
          </p>
        </div>
        <SignOutButton />
      </PopoverContent>
    </Popover>
  );
};
