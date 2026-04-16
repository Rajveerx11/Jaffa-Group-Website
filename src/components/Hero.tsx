import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 600], [0, 240]); // 0.4x scroll speed
  const scale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 300], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen w-full overflow-hidden bg-bg-primary">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        <img 
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Mountain Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY, opacity }}
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-6"
        >
          Park City, Utah
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif font-light text-5xl md:text-[92px] leading-[1.05] tracking-[-0.02em] text-text-primary mb-6 whitespace-pre-line"
        >
          {"Homes Built for\nHow You Live"}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans font-light text-base md:text-lg text-text-secondary max-w-2xl whitespace-pre-line mb-10"
        >
          {"Custom luxury residences crafted with precision,\npurpose, and uncompromising detail."}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-accent-gold text-black font-sans text-[12px] tracking-[0.12em] uppercase hover:bg-accent-gold-hover transition-colors duration-300"
          >
            Explore Our Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border border-white text-white font-sans text-[12px] tracking-[0.12em] uppercase hover:border-accent-gold hover:text-accent-gold transition-colors duration-300"
          >
            Start Your Build
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="font-sans text-[10px] tracking-widest text-text-secondary mb-3">SCROLL</span>
        <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold"
            animate={{ y: [0, 60] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
