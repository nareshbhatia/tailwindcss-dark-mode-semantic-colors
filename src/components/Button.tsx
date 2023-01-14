import clsx from 'clsx';

const variantStyles: { [variant: string]: string } = {
  primary:
    'bg-brand text-onbrand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 shadow-sm',
  secondary:
    'bg-secondary text-onsecondary hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2',
};

// @ts-ignore
export function Button({ variant = 'primary', className, children, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center overflow-hidden rounded-md border border-transparent px-8 py-2 text-sm font-medium',
    variantStyles[variant],
    className
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
