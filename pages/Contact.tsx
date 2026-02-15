import React, { useState, useEffect } from 'react';
import { GrainOverlay, SectionHeading, Button, Divider } from '../components/ui/Shared';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use mailto to open default email client
    const mailtoLink = `mailto:pulegumede04@gmail.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from Website')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-charcoal min-h-screen pt-32 pb-20 relative">
      <GrainOverlay />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="Get in Touch" subtitle="Start your journey to financial freedom today." centered />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-cream mb-6">Contact Information</h3>
              <p className="text-muted font-sans leading-relaxed mb-8">
                Ready to take the next step? Reach out to discuss your financial goals, investment strategies, or mentorship opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary border border-gold/20 rounded-full group-hover:border-gold transition-colors">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:pulegumede04@gmail.com" className="text-cream font-serif text-lg hover:text-gold transition-colors">
                    pulegumede04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary border border-gold/20 rounded-full group-hover:border-gold transition-colors">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gold uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href="https://wa.me/0659026716" target="_blank" rel="noopener noreferrer" className="text-cream font-serif text-lg hover:text-gold transition-colors">
                    +27 65 902 6716
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary border border-gold/20 rounded-full group-hover:border-gold transition-colors">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-cream font-serif text-lg">
                    Sandton, Johannesburg
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 md:p-10 border border-divider-light shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
             
             <h3 className="font-serif text-2xl text-cream mb-8">Send a Message</h3>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs text-gold uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-charcoal border-b border-divider-light focus:border-gold px-0 py-3 text-cream outline-none transition-colors placeholder:text-muted/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-gold uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full bg-charcoal border-b border-divider-light focus:border-gold px-0 py-3 text-cream outline-none transition-colors placeholder:text-muted/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs text-gold uppercase tracking-widest">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-charcoal border-b border-divider-light focus:border-gold px-0 py-3 text-cream outline-none transition-colors placeholder:text-muted/20"
                    placeholder="Consultation Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-gold uppercase tracking-widest">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-charcoal border-b border-divider-light focus:border-gold px-0 py-3 text-cream outline-none transition-colors resize-none placeholder:text-muted/20"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full mt-4">
                  Send Message <Send size={16} />
                </Button>
             </form>
          </div>

        </div>
      </div>
    </main>
  );
};