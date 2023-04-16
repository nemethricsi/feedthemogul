import * as React from "react";
import type {  PageProps } from "gatsby";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/Seo';
import SubscriptionWidget from '../components/SubscriptionWIdget';
import { SiBandcamp,  SiYoutube } from 'react-icons/si'
import { SlSocialFacebook, SlSocialInstagram, SlSocialSpotify, SlSocialSoundcloud } from 'react-icons/sl'

const MainStyles = styled.main`
  min-height: 100%;
  display: grid;
  place-content: center;

  @media (max-width: 800px) {
    padding-top: 2.5rem;
  }
`;

const ImageWrapper = styled.div`
  justify-self: center;
  margin-bottom: 1rem;
  width: 200px;
  border-radius: 50%;
`;

const Subtitle = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`

const SocialIcons = styled.div`
  padding: 20px; 
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 800px) {
    margin-bottom: 2rem;
  }
`;

const IconWrapper = styled.a`
  background: white;
  width: 50px;  
  height: 50px; 
  border-radius: 50%;
  display: grid; 
  place-content: center;
  cursor: pointer;
  box-shadow: var(--icon-wrapper-box-shadow);
  transition: transform 0.25s ease-in-out;

  &:hover {
    box-shadow: var(--box-shadow-paper);
  }

  @media (max-width: 800px) {
    width: 60px;  
    height: 60px;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title='Főoldal' />
      <MainStyles>
        <ImageWrapper>
          <StaticImage src="../assets/images/ftm-logo.jpeg" alt="Feed The Mogul logo" style={{ borderRadius: '50%' }} imgStyle={{ borderRadius: '50%' }} />
        </ImageWrapper>
        <Subtitle>Budapest based grunge-stoner-punk rock</Subtitle>
        <SocialIcons>
          <IconWrapper 
            href="https://feedthemogul.bandcamp.com"
            target="_blank"
            rel='noopener noreferrer'
            >
            <SiBandcamp size={30} />
          </IconWrapper>
          <IconWrapper 
            href="https://open.spotify.com/artist/0sIHN7AhJVinHJak74LClq?si=DzI9EyYQRpGEts1SuwugXg&dd=1"
            target="_blank"
            rel='noopener noreferrer'
            >
            <SlSocialSpotify size={30} />
          </IconWrapper>
          <IconWrapper 
            href="https://www.instagram.com/feedthemogul"
            target="_blank"
            rel='noopener noreferrer'
            >
            <SlSocialInstagram size={30} />
          </IconWrapper>
          <IconWrapper 
            href="https://www.facebook.com/feedthemogul"
            target="_blank"
            rel='noopener noreferrer'
            >
            <SlSocialFacebook size={30} />
          </IconWrapper>
          <IconWrapper 
            href="https://www.youtube.com/@FeedTheMogul"
            target="_blank"
            rel='noopener noreferrer'
            >
            <SiYoutube size={30} />
          </IconWrapper>
          <IconWrapper 
            href="https://soundcloud.com/user-512421796"
            target="_blank"
            rel='noopener noreferrer'
            >
            <SlSocialSoundcloud size={30} />
          </IconWrapper>
        </SocialIcons>
        <SubscriptionWidget />
      </MainStyles>
    </>
  )
}

export default IndexPage
