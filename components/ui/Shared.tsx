import React from 'react';

// --- Grain Texture Overlay ---
export const GrainOverlay: React.FC = () => (
  <div 
    className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
    }}
  />
);

// --- Section Divider ---
export const Divider: React.FC<{ light?: boolean; className?: string }> = ({ light = true, className = "" }) => (
  <div className={`h-[1px] w-full ${light ? 'bg-divider-light' : 'bg-divider-dark'} ${className}`} />
);

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-all duration-300 ease-out flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold text-charcoal hover:bg-gold-light shadow-[0_4px_14px_rgba(201,162,74,0.2)] hover:shadow-[0_6px_20px_rgba(201,162,74,0.3)] hover:-translate-y-0.5",
    secondary: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal hover:-translate-y-0.5",
    outline: "bg-transparent border border-cream/20 text-cream hover:border-gold hover:text-gold",
    ghost: "text-muted hover:text-gold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Section Heading ---
export const SectionHeading: React.FC<{ 
  title: string; 
  subtitle?: string; 
  centered?: boolean; 
  light?: boolean 
}> = ({ title, subtitle, centered = true, light = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} relative z-10`}>
    <h2 className={`font-serif text-3xl md:text-5xl font-medium mb-4 ${light ? 'text-charcoal' : 'text-cream'}`}>
      {title}
      <span className="block h-[2px] w-12 bg-gold mt-4 mx-auto" style={{ marginLeft: centered ? 'auto' : '0' }}></span>
    </h2>
    {subtitle && (
      <p className={`font-sans text-sm md:text-base tracking-wide mt-4 ${light ? 'text-charcoal/70' : 'text-muted'}`}>
        {subtitle}
      </p>
    )}
  </div>
);
