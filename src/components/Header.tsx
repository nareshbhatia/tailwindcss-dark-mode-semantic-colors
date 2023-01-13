import { ModeToggle } from '~/components/ModeToggle';

export function Header() {
  return (
    <div className="h-14 flex items-center px-4">
      <h1 className="flex-1 text-lg font-semibold">Tailwind Dark Mode</h1>
      <ModeToggle />
    </div>
  );
}
