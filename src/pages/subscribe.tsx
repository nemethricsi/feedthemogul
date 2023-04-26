import * as React from 'react';
import SubscriptionWidget from '../components/SubscriptionWidget';
import Seo from '../components/Seo';

const Subscribe = () => {
  return (
    <>
      <Seo title="Subscribe" />
      <main className="flex h-full items-start justify-center bg-white md:min-h-full md:bg-transparent md:pt-20">
        <SubscriptionWidget />
      </main>
    </>
  );
};

export default Subscribe;
