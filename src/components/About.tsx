import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="w-full bg-bg-primary py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left Column - Text */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-6 block">
              Our Philosophy
            </span>
            <h2 className="font-serif font-normal text-4xl md:text-[56px] leading-[1.1] text-text-primary mb-8 whitespace-pre-line">
              {"Every Home Is a\nLifetime Decision."}
            </h2>
            <div className="font-sans font-light text-base text-text-secondary leading-[1.8] space-y-6 mb-10">
              <p>
                At Jaffa Group, we believe that a luxury home is more than an architectural achievement—it is the physical embodiment of your legacy. For over two decades, we have been crafting bespoke mountain retreats across Park City, Deer Valley, and Promontory, marrying visionary design with uncompromising construction standards.
              </p>
              <p>
                Our design-build approach ensures that every detail, from the initial site analysis and view corridor optimization to the final interior finishes, is executed with precision. We build for the climate, the terrain, and most importantly, for the way you live.
              </p>
            </div>
            <a 
              href="#team"
              className="inline-flex items-center font-sans text-[12px] tracking-[0.12em] text-accent-gold uppercase hover:text-accent-gold-hover transition-colors duration-300 group relative"
            >
              Meet The Team
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative z-10 aspect-[3/4] w-full max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover border-[2px] border-transparent"
              />
              {/* Decorative Frame */}
              <div className="absolute top-4 left-4 w-full h-full border border-accent-gold -z-10 translate-x-4 translate-y-4" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
