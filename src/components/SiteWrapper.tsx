import React from 'react';
import type { ReactNode } from 'react';
// import GlobalStyles from '../styles/GlobalStyles';

interface SiteWrapperProps {
  children: ReactNode;
}

export default function SiteWrapper({ children }: SiteWrapperProps) {
  return (
    <>
      {/* <GlobalStyles /> */}
      {children}
    </>
  );
}
