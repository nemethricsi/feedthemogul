import * as React from 'react';
import type { PageProps } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import SubscriptionWidget from '../components/SubscriptionWidget';
import { SiBandcamp, SiYoutube, SiDeezer } from 'react-icons/si';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialSpotify,
  SlSocialSoundcloud,
} from 'react-icons/sl';

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <>
      <Seo title="Főoldal" />
      <main className="grid min-h-full place-content-center pt-10 md:py-10">
        <div className="mb-4 h-44 w-44 justify-self-center rounded-full leading-none">
          <StaticImage
            src="../assets/images/ftm-logo-pink.jpg"
            alt="Feed The Mogul logo"
            style={{
              borderRadius: '50%',
              width: '100%',
              height: '100%',
            }}
            imgStyle={{
              borderRadius: '50%',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <p className="text-center text-base md:text-xl">
          Grunge-stoner-punk rock Budapestről
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-6 p-5 md:mb-20">
          <a
            href="https://feedthemogul.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 cursor-pointer place-content-center rounded-full bg-white shadow-md transition-all hover:bg-pink-200 hover:shadow-xl md:h-12 md:w-12"
          >
            <SiBandcamp size={30} />
          </a>
          <a
            href="https://open.spotify.com/artist/0sIHN7AhJVinHJak74LClq?si=DzI9EyYQRpGEts1SuwugXg&dd=1"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 cursor-pointer place-content-center rounded-full bg-white shadow-md transition-all hover:bg-pink-200 hover:shadow-xl md:h-12 md:w-12"
          >
            <SlSocialSpotify size={30} />
          </a>
          <a
            href="https://www.instagram.com/feedthemogul"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 cursor-pointer place-content-center rounded-full bg-white shadow-md transition-all hover:bg-pink-200 hover:shadow-xl md:h-12 md:w-12"
          >
            <SlSocialInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/feedthemogul"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 cursor-pointer place-content-center rounded-full bg-white shadow-md transition-all hover:bg-pink-200 hover:shadow-xl md:h-12 md:w-12"
          >
            <SlSocialFacebook size={30} />
          </a>
          <a
            href="https://www.youtube.com/@FeedTheMogul?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 cursor-pointer place-content-center rounded-full bg-white shadow-md transition-all hover:bg-pink-200 hover:shadow-xl md:h-12 md:w-12"
          >
            <SiYoutube size={30} />
          </a>
          <a
            href="https://soundcloud.com/feedthemogul"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 cursor-pointer place-content-center rounded-full bg-white shadow-md transition-all hover:bg-pink-200 hover:shadow-xl md:h-12 md:w-12"
          >
            <SlSocialSoundcloud size={30} />
          </a>
          <a
            href="https://www.deezer.com/en/artist/63211522"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 cursor-pointer place-content-center rounded-full bg-white shadow-md transition-all hover:bg-pink-200 hover:shadow-xl md:h-12 md:w-12"
          >
            <SiDeezer size={30} />
          </a>
        </div>
        <SubscriptionWidget />
      </main>
    </>
  );
};

export default IndexPage;
