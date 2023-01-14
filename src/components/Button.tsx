import clsx from 'clsx';

const variantStyles: { [variant: string]: string } = {
  primary: 'bg-brand text-onbrand hover:bg-brand-hover shadow-sm',
  secondary: 'bg-secondary text-onsecondary hover:bg-secondary-hover',
};

// TODO: Fix ts-ignore
// @ts-ignore
export function Button({ variant = 'primary', className, children, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center overflow-hidden px-8 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-default focus:ring-offset-2',
    variantStyles[variant],
    className
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
