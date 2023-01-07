import clsx from 'clsx';

const variantStyles: { [variant: string]: string } = {
  primary:
    'inline-flex items-center rounded-md border border-transparent bg-primary-600 px-8 py-2 text-lg font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  secondary:
    'inline-flex items-center rounded-md border border-transparent bg-primary-100 px-8 py-2 text-lg font-semibold text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
};

// @ts-ignore
export function Button({ variant = 'primary', className, children, ...props }) {
  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
