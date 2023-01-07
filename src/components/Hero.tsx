import { Button } from './Button';

export function Hero() {
  return (
    <div className="bg-primary-800 text-white dark:bg-primary-600 flex flex-col items-center py-16">
      <h1 className="flex-1 text-5xl font-semibold">Code Shaper</h1>
      <p className="mt-6 text-2xl">A delightful, modular code generator</p>
      <Button className="mt-6" variant="secondary">
        GET STARTED
      </Button>
    </div>
  );
}
