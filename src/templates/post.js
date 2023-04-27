import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import getYoutubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import YouTube from 'react-youtube';
import SubscriptionWidget from '../components/SubscriptionWidget';
import Seo from '../components/Seo';

export default function SinglePost({ data: { post } }) {
  const components = {
    marks: {
      link: ({ children, value: { href } }) => {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
    types: {
      embedYoutube: ({ value }) => {
        const id = getYoutubeId(value.url);

        if (!id) return null;

        return <YouTube iframeClassName="w-full aspect-video" videoId={id} />;
      },
    },
  };
  const {
    title,
    _rawContent: portableText,
    author: { name: authorName },
    publishedDate,
  } = post;

  return (
    <div className="min-h-full bg-white py-4 md:bg-zinc-200 md:py-16">
      <div className="m-auto flex max-w-3xl flex-col gap-4 bg-white p-4 md:rounded md:p-10 md:shadow">
        <Seo
          title={title}
          // image={props.data.post.featuredImage.image.asset.url}
        />
        <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
        <p className="mb-6 self-start rounded bg-slate-800 px-2 py-1 text-sm font-medium text-pink-200">
          {authorName}
        </p>
        <PortableText value={portableText} components={components} />
        <div className="mb-11 mt-2  md:mt-24">
          <SubscriptionWidget />
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      _id
      title
      publishedDate
      author {
        name
      }
      _rawContent(resolveReferences: { maxDepth: 4 })
    }
  }
`;
