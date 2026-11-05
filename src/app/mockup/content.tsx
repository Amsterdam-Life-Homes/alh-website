import { ServiceShell } from '../../components/service/ServiceShell';
import { HeroStats } from '../../components/service/bands';
import { INTAKE_URL, REVIEWS } from '../../lib/renting';
import styles from '../renting/renting.module.css';

// MOCKUPS ONLY (Nov 2026, never for main): three new homepage bodies under
// the untouched live hero. All copy is the live homepage's, verbatim.
export { INTAKE_URL };

export const SERVICES = [
  { n: '01', name: 'Renting in Amsterdam', short: 'Renting', promise: 'Properties go within hours. We get ahead of the market for you, whether you are still abroad or already here.', href: '/renting', img: '/renting/hero-canal.jpg' },
  { n: '02', name: 'Letting your property', short: 'Letting', promise: 'We match the right tenant to the right property from the start, and protect your investment while they live there.', href: '/letting', img: '/letting/hero.webp' },
  { n: '03', name: 'Buying in Amsterdam', short: 'Buying', promise: 'Buying as an expat is complex. We represent only you, never the seller, and we guide you through every step.', href: '/buying', img: '/buying/hero.webp' },
  { n: '04', name: 'Relocating employees', short: 'Corporate', promise: 'We handle expat housing at scale for companies and relocation managers, with the same personal approach.', href: '/b2b', img: '/b2b/hero.jpg' },
];

export const ABOUT = [
  'We get it. New country, new rules, new everything. When we moved to Amsterdam, finding a home felt like a full time job we were not qualified for. Nine years on, we have helped over 250 people through the same process. Not because we learned it from a textbook, but because we lived it.',
  'We are a boutique agency and that is intentional. Every client works directly with us. We know Amsterdam’s neighbourhoods, its landlords, its contracts, and the unwritten rules that make all the difference. We handle everything so you can focus on the move itself.',
];

export const ARTICLES = [
  { title: 'Top neighborhoods in Amsterdam for expats to live', href: '/blog/top-neighborhoods-in-amsterdam-for-expats-to-live', img: '/renting/hero-canal.jpg', alt: 'Canal houses in Amsterdam daylight' },
  { title: 'How to get a social services number (BSN) and why you need it', href: '/blog/how-to-get-a-social-services-number-(bsn)-and-why-you-need-it', img: '/renting/tile-corporate.jpg', alt: 'A leafy Amsterdam lane' },
];

export const CLOSE_P = 'Book a free 30 minute video call with us. Whether you are searching for a home, letting your property, buying, or relocating a team: you tell us what you need, we tell you how everything works and what you can expect. No commitment, no sales pitch, just a conversation.';
export const FINE = 'Free. Takes 30 minutes. And will give you all the clarity you were looking for.';

export function leadReviews() {
  return ['Melissa', 'Elora', 'Sally']
    .map((n) => REVIEWS.find((r) => r.who.includes(n)))
    .filter((r): r is (typeof REVIEWS)[number] => Boolean(r));
}

// The live hero, one to one with src/app/page.tsx, inside the live shell.
export function MockShell({ children }: { children: React.ReactNode }) {
  return (
    <ServiceShell current="/" ctaTitle="Let's talk." formHref="/contact#contact" popAnchor="pop-anchor">
      <div className={styles.hero}>
        <video autoPlay muted loop playsInline poster="/home/hero.webp" aria-hidden="true">
          <source src="/home/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroIn}>
          <h1>We help fellow expats<br />rent, let, and buy their home<br />in Amsterdam</h1>
          <div className={styles.heroBtns}>
            <a className={styles.heroBtn} href={INTAKE_URL} target="_blank" rel="noreferrer">Schedule a free video call</a>
          </div>
        </div>
        <HeroStats stats={[['250+', 'Expats housed'], ['9+ yrs', 'Of experience'], ['85%', 'From referrals']]} />
      </div>
      {children}
    </ServiceShell>
  );
}
