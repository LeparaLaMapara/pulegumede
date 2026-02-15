import React from 'react';
import { GrainOverlay, SectionHeading } from '../ui/Shared';
import { ArrowUpRight } from 'lucide-react';

export const ContentStrip: React.FC = () => {
  return (
    <section className="bg-secondary relative py-24 border-t border-divider-light border-b">
      <GrainOverlay />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 md:w-24 bg-gold/50"></div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream tracking-wider uppercase text-center">
            Learn. Grow. Execute.
          </h2>
          <div className="h-[1px] w-12 md:w-24 bg-gold/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Article 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-charcoal mb-4 overflow-hidden border border-divider-light relative">
               <img 
                src="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2664&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                alt="Wealth"
              />
              <div className="absolute top-4 left-4 bg-gold text-charcoal text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Article</div>
            </div>
            <h3 className="text-cream font-serif text-xl group-hover:text-gold transition-colors flex items-start justify-between">
              3 Steps to Protect Your Wealth
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </div>

          {/* Quote Card */}
          <div className="bg-charcoal border border-gold/20 p-8 flex flex-col justify-center text-center relative">
            <span className="text-6xl font-serif text-gold leading-none absolute top-4 left-4 opacity-50">“</span>
            <p className="font-serif text-2xl text-cream leading-relaxed mb-4 relative z-10">
              Success is not given, it’s earned through discipline and vision.
            </p>
            <p className="text-gold text-xs uppercase tracking-widest">— Pule Advisor</p>
          </div>

          {/* Article 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-charcoal mb-4 overflow-hidden border border-divider-light relative">
               <img 
                src="https://images.unsplash.com/photo-1579532415943-ca53da3753be?q=80&w=2670&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                alt="Investors"
              />
               <div className="absolute top-4 left-4 bg-gold text-charcoal text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Insight</div>
            </div>
             <h3 className="text-cream font-serif text-xl group-hover:text-gold transition-colors flex items-start justify-between">
              Why Young Investors Fail
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
