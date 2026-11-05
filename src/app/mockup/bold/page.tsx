import type { Metadata } from 'next';
import Link from 'next/link';
import { LogoMarquee } from '../../../components/service/studyBands';
import { ABOUT, ARTICLES, CLOSE_P, FINE, INTAKE_URL, MockShell, SERVICES } from '../content';
import { REVIEWS } from '../../../lib/renting';
import s from './bold.module.css';

// Mockup "Bold": weel.nl's warmth with theagencyre.nl's confidence. Big
// serif heads with an italic label and a short brick rule, square colour
// blocks for the four services, sand panels, filled square buttons.
// The accent is Amsterdam brick, our answer to The Agency's red.
export const metadata: Metadata = {
  title: 'Homepage mockup: bold | Amsterdam Life Homes',
  robots: { index: false, follow: false },
};

export default function BoldMock() {
  const feature = REVIEWS.find((r) => r.who.includes('Elora'))!;
  const second = REVIEWS.find((r) => r.who.includes('Melissa'))!;
  return (
    <MockShell>
      <div className={s.page}>

        <section className={s.center}>
          <h2 className={s.huge}>Amsterdam&apos;s boutique housing agency,{' '}<br />run by local expats.</h2>
          <span className={s.rule} aria-hidden="true" />
          <p className={s.lead}>We have been in your shoes, know what you are looking for,{' '}<br />and simply treat you the way we want to be treated.</p>
        </section>

        <section className={s.blocks}>
          {SERVICES.map((v, i) => (
            <Link key={v.n} href={v.href} className={`${s.block} ${i % 2 ? s.blockBrick : ''}`}>
              <span className={s.blockImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.img} alt="" />
              </span>
              <span className={s.blockTxt}>
                <span className={s.blockName}>{v.short}</span>
                <span className={s.blockP}>{v.promise}</span>
                <span className={s.btnLine}>Learn more</span>
              </span>
            </Link>
          ))}
        </section>

        <section className={s.about}>
          <div className={s.aboutImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/about.webp" alt="The Amsterdam Life Homes founders on the stoop of an Amsterdam canal house" />
          </div>
          <div className={s.aboutTxt}>
            <span className={s.label}>About us</span>
            <h2 className={s.title}>Foreigners{' '}<br />ourselves.</h2>
            <span className={s.rule} aria-hidden="true" />
            {ABOUT.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}
            <Link className={s.btnLine} href="/about">More about us</Link>
          </div>
        </section>

        <section className={s.center} id="pop-anchor">
          <span className={s.label}>Our Amsterdam guide</span>
          <h2 className={s.title}>The guide we wish someone had handed us.</h2>
          <span className={s.rule} aria-hidden="true" />
        </section>
        <section className={s.cards}>
          {ARTICLES.map((a) => (
            <Link key={a.href} href={a.href} className={s.card}>
              <span className={s.cardImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.img} alt={a.alt} />
                <span className={s.flag}>Guide</span>
              </span>
              <span className={s.cardTxt}>
                <span className={s.cardT}>{a.title}</span>
                <span className={s.arrow} aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </section>
        <div className={s.centerBtn}>
          <Link className={s.btnBrick} href="/blog">Read our Amsterdam guide</Link>
        </div>

        <section className={s.kind} id="reviews">
          <div className={s.kindTxt}>
            <span className={s.label}>What our clients say</span>
            <h2 className={s.title}>Do not just take{' '}<br />our word for it.</h2>
            <span className={s.rule} aria-hidden="true" />
            <p>The true measure of our work is what our clients say afterwards. 85% of our business comes from referrals.</p>
            <Link className={s.btnBrick} href="/reviews">Read all our reviews</Link>
          </div>
          <div className={s.kindPanels}>
            {[feature, second].map((r) => (
              <figure key={r.who} className={s.panel}>
                <span className={s.panelQ}>&ldquo;{r.quote}&rdquo;</span>
                <blockquote>{r.body}</blockquote>
                <figcaption>{r.who}<span>{r.tags.join(' · ')}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={s.logos}>
          <LogoMarquee label="Our clients work at companies like" />
        </section>

        <section className={s.close}>
          <span className={s.labelLight}>Ready to start?</span>
          <h2 className={s.huge}>It starts{' '}<br />with a video call.</h2>
          <span className={s.rule} aria-hidden="true" />
          <p>{CLOSE_P}</p>
          <a className={s.btnBrick} href={INTAKE_URL} target="_blank" rel="noreferrer">Schedule a free video call</a>
          <span className={s.fine}>{FINE}</span>
        </section>

      </div>
    </MockShell>
  );
}
