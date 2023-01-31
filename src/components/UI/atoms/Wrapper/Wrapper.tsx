import clsx from "clsx";

export const Wrapper = ({ children } : { children: React.ReactNode}) => {
  return (
    <div className={clsx(
      'flex flex-col min-h-screen -z-10',
      'bg-hogwarts-md md:bg-hogwarts-lg relative inset-0 bg-cover bg-fixed bg-center bg-no-repeat', 
      'after:-z-10 after:fixed after:h-full after:w-full after:top-0 after:left-0 after:bg-gradient-to-r from-green-dark/10 after:via-green-dark/50 after:to-green-dark/90')}>
        <div className={clsx(
          "flex flex-col px-4 py-6",
          "lg:px-16 lg:py-12",
          )}>
        {children}        
        </div>
    </div>
  );
};