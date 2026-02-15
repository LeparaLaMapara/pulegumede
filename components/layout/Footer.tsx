import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Divider } from '../ui/Shared';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16 text-center md:text-left">
          
          <div>
            <h3 className="font-serif text-2xl text-cream mb-2">PULE</h3>
            <p className="text-gold text-xs tracking-widest uppercase">Financial Advisory</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-muted hover:text-gold transition-colors transform hover:-translate-y-1 duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted hover:text-gold transition-colors transform hover:-translate-y-1 duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted hover:text-gold transition-colors transform hover:-translate-y-1 duration-300">
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex gap-6 text-xs text-muted uppercase tracking-wider">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms & Conditions</a>
          </div>
        </div>

        <Divider />
        
        <div className="pt-8 text-center">
          <p className="text-muted/40 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Pule Advisory. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
