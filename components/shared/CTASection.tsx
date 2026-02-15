import React from 'react';
import { Button, GrainOverlay } from '../ui/Shared';
import { ChevronDown } from 'lucide-react';

export const CTASection: React.FC<{ 
  title?: string; 
  btnText?: string; 
  secondaryBtn?: boolean 
}> = ({ 
  title = "Ready to take control of your financial future?", 
  btnText = "Schedule Your Strategy Session",
  secondaryBtn = false
}) => {
  return (
    <section className="bg-secondary relative py-24 border-t border-divider-light">
      <GrainOverlay />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-charcoal p-2 border border-divider-light rounded-full z-20">
        <ChevronDown className="text-gold" size={20} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-cream mb-10 leading-tight">
          {title}
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="primary" className="min-w-[240px]">
            {btnText}
          </Button>
          {secondaryBtn && (
            <Button variant="outline" className="min-w-[240px]">
              Join My Newsletter
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
