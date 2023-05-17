import { BackButton } from '~/components/back-button';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pb-16">
      <header className="py-4 md:py-8">
        <BackButton>Back</BackButton>
      </header>

      {children}
    </div>
  );
}
