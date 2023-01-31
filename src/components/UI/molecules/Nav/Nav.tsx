import React from 'react';

export const Nav = ({children} : {children: React.ReactNode}) => {
  return (
    <nav className="flex flex-col gap-2 mt-12 lg:mt-48 xl:mt-72">
      {children}
    </nav>
  );
};