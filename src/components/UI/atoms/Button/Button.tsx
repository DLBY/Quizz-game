import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: string;
};

export const Button = ({ children, className, size, ...props } : ButtonProps) => {


  return (
    <>
    <button type="button" className={clsx(
  'font-bold rounded-2xl shadow-btn',
  `sm:active:shadow-btn sm:hover:shadow-btn-hover`, `group relative overflow-hidden transition-all duration-200 ${className}`,
    )} {...props}>
      <div className="relative text-white top-0 pb-0.5 sm:group-hover:-top-[3px] sm:group-active:top-0 transition-all duration-200">
        {children}
      </div>
    </button>
    </>
  );
};
