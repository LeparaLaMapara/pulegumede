import React from 'react';
import { SectionHeading, Divider } from '../ui/Shared';

const TESTIMONIALS = [
  {
    quote: "During his time shadowing our advisory team, Pule showed strong administrative discipline and respect for client confidentiality. He took initiative in preparing meeting notes, reviewing financial needs analyses, and understanding regulatory requirements. He carries himself with maturity beyond his years.",
    author: "Cody.",
    role: "Business Owner"
  },
  {
    quote: "Pule demonstrated exceptional curiosity and professionalism during his job-shadowing period. He consistently asked insightful questions about financial planning strategies and compliance processes. His eagerness to learn and ability to grasp complex concepts quickly sets him apart as a future leader in the financial services industry..",
    author: "Shawn Selepe",
    role: "Real Estate Investor"
  }
];

export const TrustedSection: React.FC = () => {
  return (
    <section className="bg-cream text-charcoal py-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <Divider light={false} className="mb-16" />
        
        <SectionHeading title="Trusted & Awarded" light centered />

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-charcoal/10 bg-white/50 text-xs font-bold tracking-widest uppercase">
            #1 Sales Person in 2024 | #4 Sales Person in 2023
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="relative p-8 md:p-12 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-charcoal/5">
              <div className="text-6xl font-serif text-gold/30 absolute top-4 left-6 leading-none">“</div>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-charcoal mb-8 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gold"></div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider">{t.author}</p>
                  <p className="text-xs text-charcoal/50 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
