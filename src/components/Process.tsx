import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding your vision, site, lifestyle"
  },
  {
    num: "02",
    title: "Design",
    desc: "Architecture and interiors, unified"
  },
  {
    num: "03",
    title: "Build",
    desc: "Master craftsmanship, precision execution"
  },
  {
    num: "04",
    title: "Deliver",
    desc: "White-glove handover and follow-through"
  }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-bg-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-serif font-normal text-4xl md:text-[56px] text-text-primary">
            From Vision to Keys
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[1px] bg-border-subtle">
            <motion.div 
              className="h-full bg-accent-gold"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center w-full md:w-1/4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <div className="w-[60px] h-[60px] rounded-full bg-bg-primary border border-accent-gold flex items-center justify-center mb-6 relative">
                  <span className="font-sans text-sm text-accent-gold">{step.num}</span>
                  {/* Connecting Line (Mobile) */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute top-[60px] left-1/2 w-[1px] h-[48px] bg-border-subtle -translate-x-1/2" />
                  )}
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">{step.title}</h3>
                <p className="font-sans font-light text-[14px] text-text-secondary max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
