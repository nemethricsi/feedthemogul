import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components';

const MainStyles = styled.main`
  min-height: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Letter = styled.div`
  background-color: var(--white);
  box-shadow: var(--box-shadow-paper);
  padding: 30px;
  border-radius: 4px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 16px;
  justify-content: center;

  li {
    color: white;
    background-color: hsla(181, 87%, 37%, 1);
    border-radius: 8px;
    
    &:hover {
      background-color: hsla(181, 87%, 47%, 1);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    background: none;
    padding: 6px 12px;
  }
`;

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const PressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;

  a {
    background: none;
  }

  li::marker {
    content: "🎸 ";
  }
`;

const Greeting = styled.p`
  font-size: 120%; 
  margin: 0; 
  margin-top: 1.5rem;
`;

const Signature = styled.p`
  font-family: 'Reenie Beanie', cursive;
  font-size: 60px;
  margin: 0;
  line-height: 0.4;
  color: var(--blue-ink);
`;

const UtcazenePage: React.FC<PageProps> = () => {
  return (
    <MainStyles>
      <Letter>
        <Links>
          <li>
            <a href='#acoustic-video'>Látható és hallható</a>
          </li>
          <li>
            <a href='#introduction'>Bemutatkozás</a>
          </li>
          <li>
            <a href='#references'>Egyéb referenciák</a>
          </li>
          <li>
            <a href='#contact'>Elérhetőségek</a>
          </li>
        </Links>
        <Greeting>
          Tisztelt Utcazene Szervezők!
        </Greeting>
        <p>
          <strong>Ipolyi-Gáts Hunor</strong> vagyok a <span>Feed the Mogulból</span>.
          Zenekarunk akusztik műsorra társult{' '}
          <a
            href="https://www.instagram.com/lenkke_/"
            target="_blank"
            rel="noopener noreferrer"
            >Lenkke_</a
          >-vel, és ezúton szeretnénk jelentkezni a 2023-as Utcazene Fesztiválra.
        </p>
        <h2 id='acoustic-video'>Akusztikus bemutatkozásunk (playlist):</h2>
        <IframeWrapper>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCLC8xWf2TP_Smlr53PputhK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </IframeWrapper>
        <p>
          Egy grunge-punk banda vagyunk Budapestről, akik energikus, mozgásra
          invitáló zenét játszanak általában. Több vetélkedőn értünk már el
          megtisztelő eredményt, például megnyertük a XXIII. Légrádi Antal
          Tehetségkutatót. Első nagylemezünk 2022 végén jött ki Superfine néven.
          Jelenleg második albumunkat írjuk, és eközben hangsúlyt kapott a zenekar
          életében az akusztik is. Már mind utcazenéltünk, és így jött az ötlet,
          hogy saját dalainkat dolgozzuk át erősítés nélkül is megszólaló
          hangszerekre. Ez nem volt nehéz, ugyanis basszerossunk évek óta
          nagybőgőzik, dobosunk bármin tud játszani, gitárosunkkal már rengeteg
          akusztik koncertet játszottunk együtt, én pedig 14 éves koromban
          utcazenéltem először és azóta is rendszeresen járok például a Szimpla
          Kertbe Budapesten, ahol ugyanúgy kalapozok, mint annó.
        </p>
        <p>
          Dalaink ebben a formában való megszólalásához Fehér Lili "Lenkke_"
          segítségét kértük vokálon, akivel teljessé vált a hangzás. Lenkke_
          egyébként az idei Kikeltető döntőse, és már a lemezen is énekel velünk,
          így ez nem volt újdonság.
        </p>
        <p>
          Reméljük beválogatásra kerülünk, nagyon szeretnénk előadni Veszprém
          utcáin!
        </p>
        <p style={{ marginTop: '2rem' }}>Üdvözlettel,</p>
        <Signature>
          Hunor
        </Signature>
        <p>Feed the Mogul</p>
        <hr />
        <h2 id='introduction'>Bemutatkozás</h2>
        <p>
          A Feed The Mogul egy fiatal rockzenekar Budapestről. Az energikus és
          húzós tempójú zenéjük mélyen behatol az ember lelkébe, ám képesek
          akusztikus hangszereken is játszani, megmutatva sokoldalúságukat.
          Zenéjükben keverednek a grunge, a punk és a stoner elemek, így egyedi és
          megragadó hangzást hoznak létre. Szövegeik kritikusak, amelyek néha a
          kihívásokkal teli világunkról, máskor éppen annak egyszerűségéről
          szólnak. A banda tagjai a Kőbányai Zeneiskolában találkoztak, onnan
          indították útjára a Mogult 2017-ben. A Feed The Mogul egy igazi
          tehetséges és ígéretes zenekar, akik már most óriási hatást gyakorolnak
          a zenei színtéren, és izgalmas jövő előtt állnak.
        </p>
        <h2 id='references'>Sajtómegjelenések:</h2>
        <PressList>
          <li>
            <a
              href="https://langolo.hu/post-office-loive-session-a-feed-the-mogultol"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
              >Post Office – Live session a Feed The Mogultól (Lángoló)</a
            >
          </li>
          <li>
            <a
              href="https://keretblog.hu/feed-the-modul-klippremier"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
              >Keringőre invitálja asszociatív készségünket debütáló klipjével a
              Feed The Mogul zenekar (Keret blog)</a
            >
          </li>
          <li>
            <a
              href="https://langolo.hu/16198288-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
              >Itt az első Feed The Mogul EP, és már készül a második (Lángoló)</a
            >
          </li>
        </PressList>
        <p>Ui.: így szólunk nem akusztikus felállásban:</p>
        <p>Ezt az élőben feljátszott anyagot 2022-ben rögzítettük a Sounday
          Studióban Vastag "Vasti" Gáborral, jelenleg még nem publikus.</p>
        <IframeWrapper>
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLy-qNPoQEFCIbw2mXE9HXEqJoMoFUZ0JW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        </IframeWrapper>
        <hr />
        <div>
          <h2 id='contact'>
            Elérhetőségek
          </h2>
          <p><strong>Email:</strong> hello@feedthemogul.com</p>
          <p><strong>Menedzser:</strong> Németh Richárd</p>
          <p><strong>Telefonszám:</strong> +36 20 936 9932</p>
        </div>
      </Letter>
    </MainStyles>
  )
}
  
export default UtcazenePage
  
export const Head: HeadFC = () => <title>Utcazene Pályázat</title>