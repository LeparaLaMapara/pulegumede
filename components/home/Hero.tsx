import React from 'react';
import { GrainOverlay, Button } from '../ui/Shared';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col md:flex-row bg-charcoal overflow-hidden">
      <GrainOverlay />
      
      {/* Background City Image (Left Half mostly) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2669&auto=format&fit=crop")',
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
      </div>

      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0">
        <div className="max-w-xl">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-6 animate-fade-in">
            Premium Financial Advisory
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-cream mb-8">
            Turning Vision <br />
            Into Wealth — <br />
            <span className="text-gold italic">One Client At A Time</span>
          </h1>
          <p className="font-sans text-muted text-lg leading-relaxed mb-10 max-w-md border-l-2 border-gold/30 pl-6">
            I empower individuals and businesses to achieve financial clarity, security, and freedom through strategic foresight.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">
              Book Your Consultation
            </Button>
            <Button variant="secondary">
              Explore My Insights <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-auto flex items-end justify-center z-10">
        {/* Placeholder for Man in Suit */}
        <div className="relative h-full w-full flex items-end justify-center md:justify-start">
             <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
              alt="Pule Financial Advisor"
              className="max-h-[85vh] object-cover object-top md:object-center mask-image-bottom"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
            {/* Gradient overlay on bottom of image to blend with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
