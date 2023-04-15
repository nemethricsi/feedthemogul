import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const MainStyles = styled.main`
  min-height: 100%;
  display: grid;
  place-content: center;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainStyles>
      <StaticImage src="../images/ftm-logo.jpeg" alt="Feed The Mogul logo" style={{borderRadius: '50%', width: 250}} />
    </MainStyles>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
