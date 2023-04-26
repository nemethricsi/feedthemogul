import React from 'react';
import type { ReactNode } from 'react';

interface SiteWrapperProps {
  children: ReactNode;
}

export default function SiteWrapper({ children }: SiteWrapperProps) {
  return <>{children}</>;
}
