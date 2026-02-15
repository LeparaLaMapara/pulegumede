import React from 'react';
import { SectionHeading, Divider } from '../ui/Shared';
import { TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

const FEATURES = [
  {
    icon: <PieChart size={32} className="text-charcoal" />,
    title: "Financial Planning",
    desc: "Comprehensive roadmaps tailored to your unique life goals."
  },
  {
    icon: <ShieldCheck size={32} className="text-charcoal" />,
    title: "Risk Management",
    desc: "Protecting your legacy with strategic asset allocation and insurance."
  },
  {
    icon: <TrendingUp size={32} className="text-charcoal" />,
    title: "Investment Advisory",
    desc: "Data-driven strategies to maximize returns while minimizing volatility."
  }
];

export const MeetSection: React.FC = () => {
  return (
    <section className="bg-cream text-charcoal py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Meet Pule" light centered />
        
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-charcoal/80 italic">
            "I help clients build wealth, protect their assets, and plan for a secure future with precision and care."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 relative">
            {/* Top divider for grid */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-divider-dark hidden md:block"></div>

            {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 p-4 rounded-full bg-divider-dark/10 group-hover:bg-gold/20 transition-colors duration-300">
                {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm font-sans text-charcoal/70 leading-relaxed max-w-xs mx-auto">
                {feature.desc}
                </p>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};
