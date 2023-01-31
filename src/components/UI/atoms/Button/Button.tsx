import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  size?: string;
};

export const Button = ({ children, className, size, variant, ...props } : ButtonProps) => {
  return (
    <button type="button" className={clsx(
  'font-bold rounded-2xl shadow-btn',
  `sm:active:shadow-btn sm:hover:shadow-btn-hover`, `group relative overflow-hidden transition-all duration-200 ${className}`,
    )} {...props}>
      <div className="relative text-white mb-0 sm:group-hover:mb-1 sm:group-active:mb-0 transition-all duration-200">
        {children}
      </div>
    </button>
  );
};