import type { Metadata } from 'next';
import Link from 'next/link';
import { LogoMarquee } from '../../../components/service/studyBands';
import { ABOUT, ARTICLES, CLOSE_P, FINE, INTAKE_URL, MockShell, SERVICES, leadReviews } from '../content';
import s from './edge.module.css';

// Mockup "Edge": Amsterdam after dark. Near-black ground, Mixta set at
// poster scale, one brick accent. Signatures: the running headline, the
// services as a tracklist, the turning "run by local expats" stamp, and
// black and white photographs that warm to colour under the cursor.
export const metadata: Metadata = {
  title: 'Homepage mockup: edge | Amsterdam Life Homes',
  robots: { index: false, follow: false },
};

const RUN = ['Rent', 'Let', 'Buy', 'Amsterdam'];

export default function EdgeMock() {
  const [first, ...rest] = leadReviews();
  return (
    <MockShell>
      <div className={s.page}>

        {/* signature 1: the running headline */}
        <div className={s.run} aria-hidden="true">
          <div className={s.runTrack}>
            {[0, 1].map((k) => (
              <span key={k} className={s.runSet}>
                {RUN.map((w, i) => (
                  <span key={w} className={i % 2 ? s.runOutline : s.runFill}>{w}<i className={s.dot} /></span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <section className={s.stmt}>
          <h2 className={s.mega}>Amsterdam&apos;s boutique{' '}<br />housing agency,{' '}<br /><span className={s.brick}>run by local expats.</span></h2>
          <p className={s.stmtP}>We have been in your shoes, know what you are looking for, and simply treat you the way we want to be treated.</p>
        </section>

        <section className={s.about}>
          <div className={s.aboutImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/about.webp" alt="The Amsterdam Life Homes founders on the stoop of an Amsterdam canal house" />
            {/* signature 3: the turning stamp */}
            <svg className={s.stamp} viewBox="0 0 200 200" aria-hidden="true">
              <defs><path id="edgeStamp" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
              <text><textPath href="#edgeStamp" textLength="486" lengthAdjust="spacing">Run by local expats · Amsterdam · </textPath></text>
            </svg>
          </div>
          <div className={s.aboutTxt}>
            <span className={s.label}>About us</span>
            <h2 className={s.giant}>Foreigners{' '}<br />ourselves.</h2>
            <div className={s.cols}>
              {ABOUT.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}
            </div>
            <Link className={s.link} href="/about">More about us <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </section>

        {/* signature 2: the services as a tracklist */}
        <section className={s.tracks}>
          <div className={s.tracksHead}>
            <span className={s.label}>What we do</span>
          </div>
          {SERVICES.map((v) => (
            <Link key={v.n} href={v.href} className={s.track}>
              <span className={s.trackN}>{v.n}</span>
              <span className={s.trackName}>{v.name}</span>
              <span className={s.trackP}>{v.promise}</span>
              <span className={s.trackGo} aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </section>

        <section className={s.guide} id="pop-anchor">
          <div className={s.guideHead}>
            <span className={s.label}>Our Amsterdam guide</span>
            <h2 className={s.title}>The guide we wish{' '}<br />someone had handed us.</h2>
            <p>Everything we know about moving to and living in Amsterdam, written the way we would explain it to a friend.</p>
            <Link className={s.link} href="/blog">Read our Amsterdam guide <span aria-hidden="true">&rarr;</span></Link>
          </div>
          {ARTICLES.map((a, i) => (
            <Link key={a.href} href={a.href} className={`${s.shot} ${i ? s.shotLow : ''}`}>
              <span className={s.shotImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.img} alt={a.alt} />
              </span>
              <span className={s.shotT}>{a.title} <span className={s.brick} aria-hidden="true">&rarr;</span></span>
            </Link>
          ))}
        </section>

        <section className={s.reviews} id="reviews">
          <span className={s.label}>What our clients say</span>
          <blockquote className={s.bigQuote}>
            <span className={s.qMark} aria-hidden="true">&ldquo;</span>{first.quote}
          </blockquote>
          <div className={s.bigWho}>{first.who}<span>{first.tags.join(' · ')}</span></div>
          <div className={s.revRow}>
            <div className={s.revIntro}>
              <h2 className={s.title}>Do not just take our word for it.</h2>
              <p>The true measure of our work is what our clients say afterwards. 85% of our business comes from referrals.</p>
              <Link className={s.link} href="/reviews">Read all our reviews <span aria-hidden="true">&rarr;</span></Link>
            </div>
            {rest.map((r) => (
              <figure key={r.who} className={s.rev}>
                <q>{r.quote}</q>
                <p>{r.body}</p>
                <figcaption>{r.who}<span>{r.tags.join(' · ')}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className={s.logos}>
            <LogoMarquee label="Our clients work at companies like" />
          </div>
        </section>

        <section className={s.close}>
          <h2 className={s.closeT}>It starts{' '}<br />with a <span className={s.brick}>video call.</span></h2>
          <div className={s.closeSide}>
            <p>{CLOSE_P}</p>
            <a className={s.btn} href={INTAKE_URL} target="_blank" rel="noreferrer">Schedule a free video call</a>
            <span className={s.fine}>{FINE}</span>
          </div>
        </section>

      </div>
    </MockShell>
  );
}
