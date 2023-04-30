import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  FaGoogleDrive,
  FaYoutube,
  FaExternalLinkAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaFacebook,
  FaFilePdf,
} from 'react-icons/fa';
import { SiYoutube, SiTidal } from 'react-icons/si';
import { SlSocialInstagram, SlSocialSpotify } from 'react-icons/sl';
import Seo from '../components/Seo';

const ElectronicPressKit = () => {
  return (
    <>
      <Seo
        title="Electronic Press Kit"
        image="https://www.feedthemogul.com/static/a6c92f17af0c240174ecf8b9b5e73296/94b20/BIK00628.webp"
      />
      <main className="min-h-full md:text-lg">
        <div className="container m-auto flex min-h-full max-w-6xl flex-col gap-8 p-4 md:gap-12">
          <h1 className="mt-6 text-center text-4xl font-bold md:mb-12 md:text-6xl">
            <span className="bg-gradient-to-r from-slate-800 to-pink-500 bg-clip-text text-transparent">
              Feed The Mogul
            </span>
          </h1>
          <section className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              <div className="flex flex-col gap-4 md:col-span-5 md:gap-8">
                <h2 className="text-2xl font-semibold md:text-3xl md:uppercase">
                  Short bio
                </h2>
                <p className="text-slate-800">
                  Feed The Mogul is a Hungarian grunge stoner punk rock band
                  hailing from Budapest. Formed in 2019, the idea for the band
                  came from singer Hunor and guitarist Andrew, who played
                  together in the band Babel in the mid-2010s. Influenced by the
                  likes of QOTSA, Fuxx, Osees, Wand, Ty Segall, Idles, Led
                  Zeppelin, and Nirvana, their concerts are known for their high
                  energy performances. Feed The Mogul considers themselves a
                  live band, with a sound that is much better experienced in a
                  live setting.
                </p>
              </div>
              <StaticImage
                src="../assets/images/BIK00628.jpg"
                alt="Feed The Mogul band performing live"
                className="rounded  md:col-span-7"
              />
            </div>
          </section>
          <section className="flex flex-col gap-8 border-b-2 border-slate-300 pb-8 md:gap-12">
            <h2 className="text-2xl font-semibold md:text-3xl md:uppercase">
              Video
            </h2>
            <div className="mb-8 grid grid-cols-1 gap-4 md:mb-2 md:grid-cols-12">
              <div className="flex flex-col gap-4 md:col-span-6">
                <h3 className="text-xl font-semibold uppercase">
                  <span className="bg-gradient-to-r from-slate-800 to-pink-500 bg-clip-text text-transparent">
                    Live Sessions
                  </span>
                </h3>
                <p>
                  Recorded in 2022 at Sounday Studio in Budapest, this 6-piece
                  live session features one song in Hungarian and the rest in
                  English. Subtitles are available in both languages.
                </p>
              </div>
              <iframe
                className="aspect-video w-full rounded md:col-span-6"
                src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCIbw2mXE9HXEqJoMoFUZ0JW"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="flex flex-col gap-4 md:col-span-6">
                <h3 className="text-xl font-semibold uppercase">
                  <span className="bg-gradient-to-r from-slate-800 to-pink-500 bg-clip-text text-transparent">
                    Official Music Videos
                  </span>
                </h3>
                <p>
                  All these videos were created along with young Hungarian
                  creative creators.
                </p>
              </div>
              <iframe
                className="aspect-video w-full rounded md:col-span-6"
                src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCLPtUC6EiSM3i4YRi4dN7VU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://www.youtube.com/@FeedTheMogul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded border border-slate-300 bg-slate-50 px-4 py-3 no-underline opacity-80 md:self-center md:px-6 md:py-4 md:shadow"
            >
              <FaYoutube className="h-8 w-8 text-red-600" /> See more videos on
              our YouTube channel
              <FaExternalLinkAlt className="ml-auto h-4 w-4" />
            </a>
          </section>
          <section className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8">
            <h2 className="my-3 text-2xl font-semibold md:text-3xl md:uppercase">
              Press Photos
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <StaticImage
                src="../assets/images/BIK02598_web.jpg"
                alt="Feed The Mogul band"
                className="rounded"
              />
              <StaticImage
                src="../assets/images/DSC06196.jpg"
                alt="Feed The Mogul band 2"
                className="rounded"
              />
              <StaticImage
                src="../assets/images/BIK02528_web.jpg"
                alt="Feed The Mogul band 2"
                className="rounded"
              />
            </div>
            <a
              href="https://drive.google.com/drive/folders/1pFVzsp3ree9uAdT50kTPxTaxdhj_AT9d?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded border border-slate-300 bg-slate-50 px-4 py-3 no-underline opacity-80 md:self-center md:px-6 md:py-4 md:shadow"
            >
              <FaGoogleDrive className="h-8 w-8" />
              <span>See more photos on Google Drive (EPK)</span>
              <FaExternalLinkAlt className="ml-auto h-4 w-4" />
            </a>
          </section>
          <section className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8">
            <h2 className="my-3 text-2xl font-semibold md:text-3xl md:uppercase">
              Reach us
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaEnvelope className="h-5 w-5 text-slate-500" />
                <a href="mailto:hello@feedthemogul.com">
                  hello@feedthemogul.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="h-5 w-5 text-slate-500" />
                <a href="tel:+36 20 936 9932">+36 20 936 9932</a>
              </li>
              <li className="flex items-center gap-2">
                <FaGlobe className="h-5 w-5 text-slate-500" />
                <a
                  href="https://www.feedthemogul.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.feedthemogul.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFilePdf className="h-5 w-5 text-slate-500" />
                <a
                  href="https://drive.google.com/file/d/11tpmsxIC4XNgz_9L27sNiequKnls4wFr/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technical Rider
                </a>
              </li>
            </ul>
          </section>
          <div className="flex flex-wrap justify-center gap-12 p-4 pb-8">
            <a
              className="text-inherit no-underline"
              href="https://www.instagram.com/feedthemogul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialInstagram className="h-6 w-6 text-slate-500 hover:text-slate-700 md:h-7 md:w-7" />
            </a>
            <a
              className="text-inherit no-underline"
              href="https://www.facebook.com/feedthemogul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-6 w-6 text-slate-500 hover:text-slate-700 md:h-7 md:w-7" />
            </a>
            <a
              className="text-inherit no-underline"
              href="https://open.spotify.com/artist/0sIHN7AhJVinHJak74LClq?si=DzI9EyYQRpGEts1SuwugXg&dd=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialSpotify className="h-6 w-6 text-slate-500 hover:text-slate-700 md:h-7 md:w-7" />
            </a>
            <a
              className="text-inherit no-underline"
              href="https://www.youtube.com/@FeedTheMogul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube className="h-6 w-6 text-slate-500 hover:text-slate-700 md:h-7 md:w-7" />
            </a>
            <a
              className="text-inherit no-underline"
              href="https://tidal.com/browse/artist/3524638"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTidal className="h-6 w-6 text-slate-500 hover:text-slate-700 md:h-7 md:w-7" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default ElectronicPressKit;
