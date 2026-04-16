import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 150, suffix: '+', label: 'Homes Delivered' },
  { value: 100, suffix: '%', label: 'Custom Design-Build' },
  { value: 50, prefix: '$', suffix: 'M+', label: 'Average Project Value' },
];

function Counter({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif font-semibold text-[36px] md:text-[52px] text-accent-gold">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="w-full bg-bg-secondary py-12 md:py-24 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-accent-gold/20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <span className="font-sans font-light text-[13px] text-text-secondary mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
