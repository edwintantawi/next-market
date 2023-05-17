export default function ProductError() {
  return (
    <header className="space-y-1 pb-2 md:space-y-2">
      <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
        Product does <span className="text-muted-foreground">Not Exist</span>
      </h1>
      <p className="text-sm text-muted-foreground">
        Could not find that product!
      </p>
    </header>
  );
}
