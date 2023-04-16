import * as React from "react";
import SubscriptionWidget from '../components/SubscriptionWIdget';
import styled from 'styled-components';

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
        <MainStyles>
            <SubscriptionWidget />
        </MainStyles>
    )
}

export default Subscribe;