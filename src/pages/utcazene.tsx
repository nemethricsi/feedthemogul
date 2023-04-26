import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { SiYoutube } from 'react-icons/si';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialSpotify,
} from 'react-icons/sl';
import Seo from '../components/Seo';

const UtcazenePage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-full md:py-12">
      <Seo title="Utcazene pályázat" />
      <div className="m-auto flex max-w-3xl flex-col gap-5 rounded bg-white p-4 shadow-lg md:p-8">
        <ul className="flex list-none flex-wrap justify-center gap-4">
          <li className="rounded-lg bg-violet-800 text-white hover:bg-violet-600">
            <a
              href="#acoustic-video"
              className="block h-full w-full bg-none px-4 py-2 text-inherit no-underline"
            >
              Látható és hallható
            </a>
          </li>
          <li className="rounded-lg bg-violet-800 text-white hover:bg-violet-600">
            <a
              href="#introduction"
              className="block h-full w-full bg-none px-4 py-2 text-inherit no-underline"
            >
              Bemutatkozás
            </a>
          </li>
          <li className="rounded-lg bg-violet-800 text-white hover:bg-violet-600">
            <a
              href="#references"
              className="block h-full w-full bg-none px-4 py-2 text-inherit no-underline"
            >
              Egyéb referenciák
            </a>
          </li>
          <li className="rounded-lg bg-violet-800 text-white hover:bg-violet-600">
            <a
              href="#contact"
              className="block h-full w-full bg-none px-4 py-2 text-inherit no-underline"
            >
              Elérhetőségek
            </a>
          </li>
        </ul>
        <p className="mt-6 text-xl">Tisztelt Utcazene Szervezők!</p>
        <p>
          <strong>Ipolyi-Gáts Hunor</strong> vagyok a{' '}
          <span>Feed the Mogulból</span>. Zenekarunk akusztik műsorra társult{' '}
          <a
            href="https://www.instagram.com/lenkke_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lenkke_
          </a>
          -vel, és ezúton szeretnénk jelentkezni a 2023-as Utcazene Fesztiválra.
        </p>
        <h2 id="acoustic-video">Akusztikus bemutatkozásunk (playlist):</h2>
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCLC8xWf2TP_Smlr53PputhK"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video"
        />
        <p>
          Egy grunge-punk banda vagyunk Budapestről, akik energikus, mozgásra
          invitáló zenét játszanak általában. Több vetélkedőn értünk már el
          megtisztelő eredményt, például megnyertük a XXIII. Légrádi Antal
          Tehetségkutatót. Első nagylemezünk 2022 végén jött ki Superfine néven.
          Jelenleg második albumunkat írjuk, és eközben hangsúlyt kapott a
          zenekar életében az akusztik is. Már mind utcazenéltünk, és így jött
          az ötlet, hogy saját dalainkat dolgozzuk át erősítés nélkül is
          megszólaló hangszerekre. Ez nem volt nehéz, ugyanis basszerossunk évek
          óta nagybőgőzik, dobosunk bármin tud játszani, gitárosunkkal már
          rengeteg akusztik koncertet játszottunk együtt, én pedig 14 éves
          koromban utcazenéltem először és azóta is rendszeresen járok például a
          Szimpla Kertbe Budapesten, ahol ugyanúgy kalapozok, mint annó.
        </p>
        <p>
          Dalaink ebben a formában való megszólalásához Fehér Lili "Lenkke_"
          segítségét kértük vokálon, akivel teljessé vált a hangzás. Lenkke_
          egyébként az idei Kikeltető döntőse, és már a lemezen is énekel
          velünk, így ez nem volt újdonság.
        </p>
        <p>
          Reméljük beválogatásra kerülünk, nagyon szeretnénk előadni Veszprém
          utcáin!
        </p>
        <p style={{ marginTop: '2rem' }}>Üdvözlettel,</p>
        <p className="font-mono font-reenie text-6xl leading-none text-blue-600">
          Hunor
        </p>
        <p>Feed the Mogul</p>
        <div className="flex gap-6">
          <a
            href="https://open.spotify.com/artist/0sIHN7AhJVinHJak74LClq?si=DzI9EyYQRpGEts1SuwugXg&dd=1"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 cursor-pointer place-content-center rounded-full bg-violet-100 shadow transition-shadow hover:shadow-md"
          >
            <SlSocialSpotify size={30} />
          </a>
          <a
            href="https://www.instagram.com/feedthemogul"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 cursor-pointer place-content-center rounded-full bg-violet-100 shadow transition-shadow hover:shadow-md"
          >
            <SlSocialInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/feedthemogul"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 cursor-pointer place-content-center rounded-full bg-violet-100 shadow transition-shadow hover:shadow-md"
          >
            <SlSocialFacebook size={30} />
          </a>
          <a
            href="https://www.youtube.com/@FeedTheMogul"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-12 w-12 cursor-pointer place-content-center rounded-full bg-violet-100 shadow transition-shadow hover:shadow-md"
          >
            <SiYoutube size={30} />
          </a>
        </div>
        <hr />
        <h2 id="introduction">Bemutatkozás</h2>
        <p>
          A Feed The Mogul egy fiatal rockzenekar Budapestről. Az energikus és
          húzós tempójú zenéjük mélyen behatol az ember lelkébe, ám képesek
          akusztikus hangszereken is játszani, megmutatva sokoldalúságukat.
          Zenéjükben keverednek a grunge, a punk és a stoner elemek, így egyedi
          és megragadó hangzást hoznak létre. Szövegeik kritikusak, amelyek néha
          a kihívásokkal teli világunkról, máskor éppen annak egyszerűségéről
          szólnak. A banda tagjai a Kőbányai Zeneiskolában találkoztak, onnan
          indították útjára a Mogult 2017-ben. A Feed The Mogul egy igazi
          tehetséges és ígéretes zenekar, akik már most óriási hatást
          gyakorolnak a zenei színtéren, és izgalmas jövő előtt állnak.
        </p>
        <h2 id="references">Sajtómegjelenések:</h2>
        <ul
          role="list"
          className="list-disc space-y-3 pl-5 text-slate-400 marker:text-sky-400"
        >
          <li>
            <a
              href="https://f21.hu/zene/feed_the_mogul_interju"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              „Kimos mindent a fejedből és megtisztít” – Feed The Mogul-interjú
              (F21)
            </a>
          </li>
          <li>
            <a
              href="https://langolo.hu/post-office-loive-session-a-feed-the-mogultol"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              Post Office – Live session a Feed The Mogultól (Lángoló)
            </a>
          </li>
          <li>
            <a
              href="https://keretblog.hu/feed-the-modul-klippremier"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              Keringőre invitálja asszociatív készségünket debütáló klipjével a
              Feed The Mogul zenekar (Keret blog)
            </a>
          </li>
          <li>
            <a
              href="https://langolo.hu/16198288-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              Itt az első Feed The Mogul EP, és már készül a második (Lángoló)
            </a>
          </li>
        </ul>
        <p>Ui.: így szólunk nem akusztikus felállásban (playlist):</p>
        <p>
          Ezt az élőben feljátszott anyagot 2022-ben rögzítettük a Sounday
          Studióban Vastag "Vasti" Gáborral, jelenleg még nem publikus.
        </p>
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCIbw2mXE9HXEqJoMoFUZ0JW"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video"
        />
        <hr />
        <div>
          <h2 id="contact">Elérhetőségek</h2>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@feedthemogul.com">hello@feedthemogul.com</a>
          </p>
          <p>
            <strong>Menedzser:</strong> Németh Richárd
          </p>
          <p>
            <strong>Telefonszám:</strong>{' '}
            <a href="tel:+36209369932">+36 20 936 9932</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default UtcazenePage;

export const Head: HeadFC = () => <title>Utcazene Pályázat</title>;
