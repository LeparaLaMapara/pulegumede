import React from 'react';
import { GrainOverlay, Divider } from '../ui/Shared';

export const AboutHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-charcoal relative">
      <GrainOverlay />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6">
          About Pule
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-gold mb-12">
          From Humble Beginnings to Financial Mentorship
        </p>
        <Divider className="opacity-50" />
      </div>
    </section>
  );
};
