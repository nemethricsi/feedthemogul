import React from 'react';
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  children?: ReactNode;
  title?: string;
  location?: Record<string, string>;
  image?: string;
}

const Seo = ({ children, location, title, image }: SeoProps) => {
  return (
    <Helmet titleTemplate={`%s • Feed The Mogul`}>
      <html lang="hu" />
      <title>{title}</title>
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Feed The Mogul" key="ogsitename" />
      <meta
        property="og:description"
        content="Grunge stoner punk rock from Budapest"
        key="ogdesc"
      />
      {/* Fav Icons */}
      <link rel="icon" type="image/png" href="/favicon-pink-512x512.png" />
      {location && <link rel="canonical" href={location.href} />}
      {/* <link rel='alternate icon' href='/icon.ico' /> */}
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Grunge stoner punk rock from Budapest"
      />
      <meta
        name="keywords"
        property="keywords"
        content="grunge,stoner rock,punk,rock music,live concert"
      ></meta>
      {children}
    </Helmet>
  );
};

export default Seo;
