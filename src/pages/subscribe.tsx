import * as React from 'react';
import type { HeadFC } from 'gatsby';
import SubscriptionWidget from '../components/SubscriptionWidget';
import { Seo } from '../components/Seo';

const Subscribe = () => {
  return (
    <>
      <main className="flex h-full items-start justify-center bg-white md:min-h-full md:bg-transparent md:pt-20">
        <SubscriptionWidget />
      </main>
    </>
  );
};

export default Subscribe;

export const Head: HeadFC = () => {
  return <Seo title="Subscribe for Newsletter" />;
};
