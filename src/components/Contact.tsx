import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#080808] py-24 md:py-32 overflow-hidden">
      {/* Diagonal Line Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 1px, transparent 20px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif font-normal text-4xl md:text-[56px] leading-[1.1] text-text-primary mb-8 whitespace-pre-line">
              {"Let's Build Something\nExtraordinary"}
            </h2>
            <p className="font-sans font-light text-base text-text-secondary leading-[1.8] mb-12">
              Every great home begins with a conversation. Tell us your vision — we'll take it from there.
            </p>
            
            <div className="space-y-6">
              <div>
                <span className="block font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-2">Email</span>
                <a href="mailto:info@jaffagroup.com" className="font-sans text-lg text-white hover:text-accent-gold transition-colors">
                  info@jaffagroup.com
                </a>
              </div>
              <div>
                <span className="block font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-2">Phone</span>
                <a href="tel:+14355550123" className="font-sans text-lg text-white hover:text-accent-gold transition-colors">
                  +1 (435) 555-0123
                </a>
              </div>
              <div className="pt-6 flex gap-6">
                <a href="#" className="text-accent-gold hover:text-white transition-colors">
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-accent-gold hover:text-white transition-colors">
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-surface border border-[#3A3A3A] px-4 py-4 font-sans text-sm text-white placeholder-text-secondary focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-surface border border-[#3A3A3A] px-4 py-4 font-sans text-sm text-white placeholder-text-secondary focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-surface border border-[#3A3A3A] px-4 py-4 font-sans text-sm text-white placeholder-text-secondary focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>
                <div>
                  <select defaultValue="" className="w-full bg-surface border border-[#3A3A3A] px-4 py-4 font-sans text-sm text-text-secondary focus:outline-none focus:border-accent-gold transition-colors appearance-none">
                    <option value="" disabled>Project Location</option>
                    <option value="deer-valley">Deer Valley</option>
                    <option value="promontory">Promontory</option>
                    <option value="park-meadows">Park Meadows</option>
                    <option value="tuhaye">Tuhaye</option>
                    <option value="victory-ranch">Victory Ranch</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <select defaultValue="" className="w-full bg-surface border border-[#3A3A3A] px-4 py-4 font-sans text-sm text-text-secondary focus:outline-none focus:border-accent-gold transition-colors appearance-none">
                  <option value="" disabled>Project Type</option>
                  <option value="custom-home">Custom Home</option>
                  <option value="mountain-retreat">Mountain Retreat</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <textarea 
                  placeholder="Tell us about your vision..." 
                  rows={4}
                  className="w-full bg-surface border border-[#3A3A3A] px-4 py-4 font-sans text-sm text-white placeholder-text-secondary focus:outline-none focus:border-accent-gold transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent-gold text-black font-sans font-medium text-[13px] tracking-[0.12em] uppercase py-5 hover:bg-accent-gold-hover transition-colors duration-300"
              >
                Send Your Vision →
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
