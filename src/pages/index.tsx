import * as React from "react";
import type {  PageProps } from "gatsby";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/Seo';

const MainStyles = styled.main`
  min-height: 100%;
  display: grid;
  place-content: center;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title='Főoldal' />
      <MainStyles>
        <StaticImage src="../assets/images/ftm-logo.jpeg" alt="Feed The Mogul logo" style={{borderRadius: '50%', width: 250}} />
      </MainStyles>
    </>
  )
}

export default IndexPage
