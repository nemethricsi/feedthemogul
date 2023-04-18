import React from 'react';
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  children?: ReactNode;
  title?: string;
  location?: Record<string, string>;
}

const Seo = ({ children, location, title }: SeoProps) => {
  return (
    <Helmet titleTemplate={`%s • Feed The Mogul`}>
      <html lang="hu" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/png" href="/icon.png" />
      {/* <link rel='alternate icon' href='/icon.ico' /> */}
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Budapest based grunge punk stoner rock."
      />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      {children}
    </Helmet>
  );
};

export default Seo;
