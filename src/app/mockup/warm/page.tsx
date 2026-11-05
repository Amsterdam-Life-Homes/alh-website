import type { Metadata } from 'next';
import { HomeMock } from '../HomeMock';

// Homepage mockup (warm), for review only: never indexed, never linked.
export const metadata: Metadata = {
  title: 'Homepage mockup: warm | Amsterdam Life Homes',
  robots: { index: false, follow: false },
};

export default function WarmMock() {
  return <HomeMock variant="warm" />;
}
