import React from 'react';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import getYoutubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import SubscriptionWidget from '../components/SubscriptionWidget';
import Seo from '../components/Seo';
import dayjs from 'dayjs';
import { FaFacebook } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FcCalendar } from 'react-icons/fc';
import { IoTicketOutline } from 'react-icons/io5';
import Image from 'gatsby-plugin-sanity-image';

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
      embedYoutube: ({ value }) => {
        const id = getYoutubeId(value.url);

        if (!id) return null;

        return <YouTube iframeClassName="w-full aspect-video" videoId={id} />;
      },
      facebookEvent: ({ value }) => {
        const { title, url, guests, eventImage, eventDate, ticketUrl } = value;

        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit flex-col self-center rounded bg-slate-200 p-5 text-inherit text-slate-600 no-underline shadow-sm hover:text-inherit hover:text-slate-800 hover:shadow-lg md:max-w-xl md:flex-row md:gap-5 md:p-4 md:shadow-md"
          >
            <Image
              {...eventImage}
              alt="something"
              width={1000}
              className="mb-3 h-full w-full rounded object-cover md:m-0 md:w-56"
            />
            <div className="flex flex-col gap-2">
              {title}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FcCalendar className="h-6 w-6" />
                {dayjs(eventDate).format('YYYY-MM-DD HH:mm')}
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <BsFillPeopleFill className="h-3 w-3 text-slate-400" />
                  {guests} guests
                </div>
                <button
                  // href={ticketUrl}
                  onClick={() => window.open(ticketUrl, '_blank')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1 rounded-lg border bg-amber-600 px-2 py-1 text-sm font-normal text-slate-100 no-underline transition-transform hover:scale-105 hover:transform hover:text-slate-100 hover:shadow md:flex"
                >
                  <IoTicketOutline className="h-4 w-4" />
                  tickets
                </button>
                <FaFacebook className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </a>
        );
      },
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
