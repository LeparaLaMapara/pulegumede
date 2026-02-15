import React from 'react';

const CARDS = [
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop",
    title: "My Journey",
    text: "From small-town dreams to financial expert."
  },
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop",
    title: "My Experience",
    text: "Helping clients succeed for over a decade."
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
    title: "My Vision",
    text: "Empowering you to achieve financial freedom."
  }
];

export const AboutGrid: React.FC = () => {
  return (
    <section className="bg-charcoal pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, idx) => (
            <div key={idx} className="group bg-cream p-4 pb-8 hover:-translate-y-2 transition-transform duration-500 ease-out shadow-xl">
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-2 text-center">
                <h3 className="font-serif text-2xl text-charcoal mb-2">{card.title}</h3>
                <div className="h-[2px] w-8 bg-gold mx-auto mb-3"></div>
                <p className="font-sans text-charcoal/70 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
