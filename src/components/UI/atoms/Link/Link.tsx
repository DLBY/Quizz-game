import clsx from "clsx";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
};

export const Link = ({ children, className, ...props } : LinkProps) => {
  return (
    <span className={clsx(
      'cursor-pointer',
      'text-white',
      'hover:text-sand',
      'transition-colors duration-200',
      className,
    )} {...props}>
      {children}
      </span>
  );
};