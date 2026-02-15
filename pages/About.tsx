import React, { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutGrid } from '../components/about/AboutGrid';
import { ContentStrip } from '../components/about/ContentStrip';
import { HelpYouSection } from '../components/about/HelpYouSection';
import { CTASection } from '../components/shared/CTASection';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AboutHero />
      <AboutGrid />
      <ContentStrip />
      <HelpYouSection />
      <CTASection 
        title="Let's make your financial goals a reality." 
        btnText="Book A Consultation" 
        btnHref="https://wa.me/0659026716"
        secondaryBtn={true}
      />
    </main>
  );
};