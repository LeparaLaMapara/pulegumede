import React from 'react';
import { SectionHeading } from '../ui/Shared';
import { Video, FileText, Mic, Briefcase } from 'lucide-react';

const SERVICES = [
  { title: "Financial Advisory", type: "Video", icon: <Video size={16} /> },
  { title: "Insurance & Risk", type: "Article", icon: <FileText size={16} /> },
  { title: "Investment Strategies", type: "Article", icon: <FileText size={16} /> },
  { title: "Business Mentorship", type: "Voice", icon: <Mic size={16} /> },
];

export const HelpYouSection: React.FC = () => {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="How I Can Help You" light centered subtitle="Explore my resources tailored for your growth." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((item, idx) => (
            <div key={idx} className="bg-charcoal group cursor-pointer overflow-hidden relative p-8 min-h-[200px] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity text-gold">
                {item.icon}
              </div>
              <div className="text-gold/50 text-[10px] uppercase tracking-widest mb-4 border-b border-gold/20 pb-2 w-fit">
                {item.type}
              </div>
              <div>
                <h3 className="text-cream font-serif text-2xl leading-tight group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
