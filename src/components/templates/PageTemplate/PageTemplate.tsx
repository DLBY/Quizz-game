import React from 'react';
import { Wrapper } from '@/components';

export const PageTemplate = ({ children } : { children: React.ReactNode}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};