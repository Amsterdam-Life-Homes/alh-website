import type { Metadata } from 'next';
import Link from 'next/link';
import { LogoMarquee } from '../../../components/service/studyBands';
import { ABOUT, ARTICLES, CLOSE_P, FINE, INTAKE_URL, MockShell, SERVICES, leadReviews } from '../content';
import s from './warm.module.css';

// Mockup "Warm": weel.nl's atmosphere under the live hero. Cream ground,
// softly rounded photographs, the services set huge on a dark band, reviews
// on a warm dark band, pill buttons.
export const metadata: Metadata = {
  title: 'Homepage mockup: warm | Amsterdam Life Homes',
  robots: { index: false, follow: false },
};

export default function WarmMock() {
  return (
    <MockShell>
      <div className={s.page}>

        <section className={s.stmt}>
          <h2 className={s.big}>Amsterdam&apos;s boutique housing agency,{' '}<br />run by local expats.</h2>
          <div className={s.stmtSide}>
            <p>We have been in your shoes, know what you are looking for, and simply treat you the way we want to be treated.</p>
            <div className={s.btns}>
              <a className={s.pill} href={INTAKE_URL} target="_blank" rel="noreferrer">Schedule a free video call</a>
              <Link className={s.pillGhost} href="/about">More about us</Link>
            </div>
          </div>
        </section>

        <section className={s.about}>
          <div className={s.aboutImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/about.webp" alt="The Amsterdam Life Homes founders on the stoop of an Amsterdam canal house" />
          </div>
          <div className={s.aboutTxt}>
            <span className={s.kicker}>About us</span>
            <h2 className={s.title}>Foreigners ourselves.</h2>
            {ABOUT.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}
          </div>
        </section>

        <section className={s.services}>
          {SERVICES.map((v) => (
            <Link key={v.n} href={v.href} className={s.svc}>
              <span className={s.svcName}>{v.short}</span>
              <span className={s.svcP}>{v.promise}</span>
              <span className={s.svcGo}>{v.name} <span aria-hidden="true">&rarr;</span></span>
            </Link>
          ))}
        </section>

        <section className={s.guide} id="pop-anchor">
          {ARTICLES.map((a) => (
            <Link key={a.href} href={a.href} className={s.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.img} alt={a.alt} />
              <span className={s.cardIn}>
                <span className={s.tag}>Our Amsterdam guide</span>
                <span className={s.cardT}>{a.title}</span>
              </span>
            </Link>
          ))}
          <Link href="/blog" className={s.guideCell}>
            <span className={s.titleSm}>The guide we wish{' '}<br />someone had handed us.</span>
            <span className={s.guideP}>Everything we know about moving to and living in Amsterdam, written the way we would explain it to a friend.</span>
            <span className={s.pillLight}>Read our Amsterdam guide</span>
          </Link>
        </section>

        <section className={s.reviews} id="reviews">
          <div className={s.revHead}>
            <h2 className={s.titleLight}>Do not just take{' '}<br />our word for it.</h2>
            <div>
              <p>The true measure of our work is what our clients say afterwards. 85% of our business comes from referrals.</p>
              <Link className={s.pillLight} href="/reviews">Read all our reviews</Link>
            </div>
          </div>
          <div className={s.revRow}>
            {leadReviews().map((r) => (
              <figure key={r.who} className={s.rev}>
                <blockquote>
                  <span className={s.revQ}>&ldquo;{r.quote}&rdquo;</span>
                  <span className={s.revB}>{r.body}</span>
                </blockquote>
                <figcaption><b>{r.who}</b><span>{r.tags.join(' · ')}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={s.logos}>
          <LogoMarquee label="Our clients work at companies like" />
        </section>

        <section className={s.close}>
          <h2 className={s.big}>It starts{' '}<br />with a video call.</h2>
          <div className={s.closeSide}>
            <p>{CLOSE_P}</p>
            <div className={s.btns}>
              <a className={s.pill} href={INTAKE_URL} target="_blank" rel="noreferrer">Schedule a free video call</a>
            </div>
            <span className={s.fine}>{FINE}</span>
          </div>
        </section>

      </div>
    </MockShell>
  );
}
