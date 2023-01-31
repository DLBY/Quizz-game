import React from 'react';
import clsx from 'clsx';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  size?: string;
};

export const Text = ({ children, className, size, variant, ...props } : TextProps) => {
  return (
    <p className={clsx(
      'font-bold',
      `text-${size}`,
      `text-${variant}`,
      className,
    )} {...props}>
      {children}
    </p>
  );
};