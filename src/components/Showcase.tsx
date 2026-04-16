import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

export default function Showcase() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const quote = "We don't build houses. We build the backdrop to the most important moments of your life.";
  const words = quote.split(" ");

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-bg-primary">
      <motion.div 
        className="absolute inset-0 w-full h-[140%]"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Interior Showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        <h2 ref={textRef} className="font-serif font-light text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-text-primary mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.span 
          className="font-sans text-[13px] tracking-[0.2em] text-accent-gold uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: words.length * 0.05 + 0.5 }}
        >
          — Jaffa Group
        </motion.span>
      </div>
    </section>
  );
}
