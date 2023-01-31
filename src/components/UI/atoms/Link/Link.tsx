import clsx from "clsx";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  size?: string;
};

export const Link = ({ children, className, size, variant, ...props } : LinkProps) => {
  return (
    <span className={clsx(
      'cursor-pointer',
      'font-bold',
      size === 'medium' ? `text-2xl lg:text-3xl` : `text-4xl lg:text-5xl`,
      `text-${variant}`,
      // size === '4xl' && 'lg:text-5xl',
      // size === '3xl' && 'lg:text-4xl',
      'hover:text-sand',
      'transition-colors duration-200',
      className,
    )} {...props}>
      {children}
      </span>
  );
};