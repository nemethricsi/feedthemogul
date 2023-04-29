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
import { SiYoutube } from 'react-icons/si';
import { SlSocialInstagram, SlSocialSpotify } from 'react-icons/sl';

const ElectronicPressKit = () => {
  return (
    <main className="epk-bg min-h-full">
      <div className="container m-auto flex min-h-full max-w-5xl flex-col gap-8 p-4 md:gap-12">
        <h1 className="mt-6 text-center text-5xl font-bold md:mb-12 md:text-6xl">
          <span className="bg-gradient-to-r from-slate-800 to-pink-500 bg-clip-text text-transparent">
            Feed The Mogul
          </span>
        </h1>
        <section className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4 md:gap-8">
              <h2 className="text-2xl font-semibold md:text-3xl">Short bio</h2>
              <p className="text-slate-800">
                Feed The Mogul is a Hungarian grunge stoner punk rock band
                hailing from Budapest. Formed in 2019, the idea for the band
                came from singer Hunor and guitarist Andrew, who played together
                in the band Babel in the mid-2010s. Influenced by the likes of
                QOTSA, Fuxx, Osees, Wand, Ty Segall, Idles, Led Zeppelin, and
                Nirvana, their concerts are known for their high energy
                performances. Feed The Mogul considers themselves a live band,
                with a sound that is much better experienced in a live setting.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <StaticImage
                src="../assets/images/BIK00628.jpg"
                alt="Feed The Mogul band performing live"
                className="rounded"
              />
              <StaticImage
                src="../assets/images/BIK02598_web.jpg"
                alt="Feed The Mogul band"
                className="rounded md:hidden"
              />
              <a
                href="https://drive.google.com/drive/folders/1pFVzsp3ree9uAdT50kTPxTaxdhj_AT9d?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded border border-slate-300 bg-slate-50 px-2 py-1 no-underline opacity-80 md:px-6 md:py-3 md:shadow"
              >
                <FaGoogleDrive className="h-8 w-8" />
                <span>See more photos on Google Drive (EPK)</span>
                <FaExternalLinkAlt className="ml-auto h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Video</h2>
          <h3 className="text-xl font-medium">Live Sessions</h3>
          <p>
            Recorded in 2022 at Sounday Studio in Budapest, this 6-piece live
            session features one song in Hungarian and the rest in English.
            Subtitles are available in both languages.
          </p>
          <iframe
            className="aspect-video w-full rounded"
            src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCIbw2mXE9HXEqJoMoFUZ0JW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3 className="text-xl font-medium">Official Music Videos</h3>
          <p>
            All these videos were created along with young Hungarian creative
            creators.
          </p>
          <iframe
            className="aspect-video w-full rounded"
            src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCLPtUC6EiSM3i4YRi4dN7VU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <a
            href="https://www.youtube.com/@FeedTheMogul"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded border border-slate-300 bg-slate-50 px-2 py-1 no-underline opacity-80 md:px-6 md:py-3 md:shadow"
          >
            <FaYoutube className="h-8 w-8 text-red-600" /> See more videos on
            our YouTube channel
            <FaExternalLinkAlt className="ml-auto h-4 w-4" />
          </a>
        </section>
        <section className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8">
          <h2 className="my-3 text-2xl font-semibold md:text-3xl">Reach us</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <FaEnvelope className="h-5 w-5 text-slate-500" />
              <a href="mailto:hello@feedthemogul.com">hello@feedthemogul.com</a>
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
        <div className="flex justify-evenly p-4 pb-8">
          <a
            className="text-inherit no-underline"
            href="https://www.instagram.com/feedthemogul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram className="h-6 w-6 text-slate-500" />
          </a>
          <a
            className="text-inherit no-underline"
            href="https://www.facebook.com/feedthemogul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-6 w-6 text-slate-500" />
          </a>
          <a
            className="text-inherit no-underline"
            href="https://open.spotify.com/artist/0sIHN7AhJVinHJak74LClq?si=DzI9EyYQRpGEts1SuwugXg&dd=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialSpotify className="h-6 w-6 text-slate-500" />
          </a>
          <a
            className="text-inherit no-underline"
            href="https://www.youtube.com/@FeedTheMogul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiYoutube className="h-6 w-6 text-slate-500" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default ElectronicPressKit;
