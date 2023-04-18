import * as React from 'react';
import SubscriptionWidget from '../components/SubscriptionWidget';
import styled from 'styled-components';
import Seo from '../components/Seo';

const MainStyles = styled.main`
  min-height: 100%;
  display: grid;
  place-content: start center;
  padding-top: 5rem;

  @media (max-width: 800px) {
    padding-top: 0;
    height: 100%;
    background: var(--white);
  }
`;

const Subscribe = () => {
  return (
    <>
      <Seo title="Subscribe" />
      <MainStyles>
        <SubscriptionWidget />
      </MainStyles>
    </>
  );
};

export default Subscribe;
