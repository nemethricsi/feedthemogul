import React from 'react';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import SubscriptionWidget from '../components/SubscriptionWidget';
import Seo from '../components/Seo';
import dayjs from 'dayjs';
import Image from 'gatsby-plugin-sanity-image';
import { FacebookEvent } from '../components/FacebookEvent';
import { EmbedYoutube } from '../components/EmbedYoutube';

export default function SinglePost({ data: { post }, location }) {
  const {
    title,
    _rawContent: portableText,
    author: { name: authorName },
    publishedDate,
    featuredImage,
  } = post;

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
      embedYoutube: EmbedYoutube,
      facebookEvent: FacebookEvent,
    },
  };

  return (
    <div className="min-h-full bg-white py-4 md:bg-zinc-200 md:py-16">
      <div className="m-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-12">
        <div className="flex flex-col gap-4 bg-white p-4 md:col-span-8 md:rounded md:p-10 md:shadow">
          <Seo
            title={title}
            image={post.featuredImage.asset.url}
            location={location}
          />
          <Image
            {...featuredImage}
            width={1000}
            className="w-full rounded"
            alt={title}
          />
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="self-start rounded bg-slate-800 px-2 py-1 text-sm font-medium text-pink-200">
            {authorName}
          </p>
          <p className="mb-6 text-slate-400">
            {dayjs(publishedDate).format('YYYY-MM-DD')}
          </p>
          <PortableText value={portableText} components={components} />
        </div>
        <div className="md:col-span-4">
          <div className="sticky top-6 bg-white p-4 @container md:rounded md:shadow">
            <SubscriptionWidget />
          </div>
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
      featuredImage {
        ...ImageWithPreview
        asset {
          url
        }
      }
    }
  }
`;
