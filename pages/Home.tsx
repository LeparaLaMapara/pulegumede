import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { MeetSection } from '../components/home/MeetSection';
import { TrustedSection } from '../components/home/TrustedSection';
import { CTASection } from '../components/shared/CTASection';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <MeetSection />
      <TrustedSection />
      <CTASection />
    </main>
  );
};
