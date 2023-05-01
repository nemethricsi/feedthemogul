import * as React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
  image?: string;
}

export const Seo = ({
  title,
  description,
  pathname,
  children,
  image,
}: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{`${seo.title} • Feed The Mogul`}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      <meta
        name="keywords"
        property="keywords"
        content="grunge,stoner rock,punk,rock music,live concert"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <link rel="icon" type="image/png" href="/favicon-pink-512x512.png" />
      {children}
    </>
  );
};
