import React from 'react';
import { Header, PrimaryNav, Wrapper } from '@/components';

// PageTemplate types
interface PageTemplateProps {
  children: React.ReactNode;
  header?: React.ReactNode;
};

export const PageTemplate = ({ children, header } : PageTemplateProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <PrimaryNav />
    </Wrapper>
  );
};