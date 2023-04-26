import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { PortableText } from '@portabletext/react';
import YouTube from 'react-youtube';
import getYoutubeId from 'get-youtube-id';
import SubscriptionWidget from '../components/SubscriptionWidget';
// import urlBuilder from '@sanity/image-url';
// import {
//   FaFacebookSquare as FacebookIcon,
//   FaInstagram,
//   FaSpotify,
//   FaYoutube,
//   FaGlobe,
//   FaExternalLinkAlt,
// } from 'react-icons/fa';
// import Img from 'gatsby-plugin-sanity-image';
// import { ContainerStyles } from '../styles/ContainerStyles';
// import { ContentStyles } from '../styles/ContentStyles';
import Seo from '../components/Seo';

// function urlFor(source) {
//   return urlBuilder({
//     projectId: 'q7xlgfk0',
//     dataset: 'production',
//   }).image(source);
// }

const Wrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 1rem;

  @media (max-width: 800px) {
    margin: 1rem auto;
  }
`;

const Headline = styled.h1`
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

const PortableTextStyles = styled.div`
  line-height: 1.5;
  margin: 2rem 0;

  p {
    font-size: 20px;
  }
`;

const ExternalLink = styled.a`
  color: hsl(var(--color-red));

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function SinglePost({ data: { post } }) {
  const components = {
    marks: {
      link: ({ children, mark }) => {
        return (
          <>
            <ExternalLink
              href={mark.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </ExternalLink>
          </>
        );
      },
    },
    types: {
      youtubeVideo: (props) => {
        const id = getYoutubeId(props.node.url);
        if (!id) return '';
        const opts = {
          // height: '450',
          width: '100%',
        };
        return (
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <YouTube videoId={id} opts={opts} />
          </div>
        );
      },
    },
  };
  const {
    _id,
    title,
    _rawBody: portableText,
    author: { name: authorName },
  } = post;

  return (
    <Wrapper>
      <Seo
        title={title}
        // image={props.data.post.featuredImage.image.asset.url}
      />
      <Headline>{title}</Headline>
      <p
        style={{
          backgroundColor: '#2e2e2e',
          color: 'var(--mogul-pink)',
          display: 'inline-block',
          padding: '2px 4px',
          borderRadius: '4px',
          fontWeight: '700',
          fontSize: 14,
        }}
      >
        {authorName}
      </p>
      <PortableTextStyles>
        <PortableText content={portableText} components={components} />
      </PortableTextStyles>
      <div style={{ marginTop: '6rem', marginBottom: '3rem' }}>
        <SubscriptionWidget />
      </div>
    </Wrapper>
  );
}

export const query = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      _id
      title
      author {
        name
      }
      _rawContent(resolveReferences: { maxDepth: 4 })
    }
  }
`;
