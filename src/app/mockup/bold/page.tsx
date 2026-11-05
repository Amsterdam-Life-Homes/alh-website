import type { Metadata } from 'next';
import { HomeMock } from '../HomeMock';

// Homepage mockup (bold), for review only: never indexed, never linked.
export const metadata: Metadata = {
  title: 'Homepage mockup: bold | Amsterdam Life Homes',
  robots: { index: false, follow: false },
};

export default function BoldMock() {
  return <HomeMock variant="bold" />;
}
