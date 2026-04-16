import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "The attention to detail is staggering. They didn't just build our house; they anticipated how we would live in it. Every view, every material choice feels perfectly placed.",
    name: "Sarah & James T.",
    project: "Promontory Ridge Estate"
  },
  {
    quote: "Building a custom home from across the country seemed daunting, but the Jaffa Group made it seamless. Their transparency and craftsmanship are unmatched in Park City.",
    name: "Michael R.",
    project: "Deer Valley Retreat"
  },
  {
    quote: "We wanted a modern mountain home that felt warm and inviting. The design-build process was incredibly collaborative, and the final result exceeded our highest expectations.",
    name: "The Harrison Family",
    project: "Park Meadows Modern"
  },
  {
    quote: "From the initial site walk to the day they handed us the keys, the professionalism was exceptional. They truly understand luxury mountain architecture.",
    name: "David L.",
    project: "Tuhaye Ski Villa"
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isHovered) {
        scrollPos += 0.5;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Duplicate testimonials for infinite scroll effect
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-bg-secondary py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="font-serif font-normal text-4xl md:text-[56px] text-text-primary">
            Built on Trust
          </h2>
        </motion.div>
      </div>

      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap px-6 md:px-12 pb-8"
          style={{ scrollBehavior: 'auto' }}
        >
          {displayTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="inline-block w-[300px] md:w-[450px] shrink-0 bg-surface border border-border-subtle rounded p-8 md:p-10 whitespace-normal"
            >
              <div className="font-serif text-[80px] leading-none text-accent-gold opacity-30 mb-[-40px]">
                "
              </div>
              <p className="font-serif font-light text-lg md:text-xl text-text-primary leading-[1.6] mb-8 relative z-10">
                {t.quote}
              </p>
              <div>
                <div className="font-sans font-medium text-[13px] text-white mb-1">
                  {t.name}
                </div>
                <div className="font-sans font-light text-[12px] text-accent-gold">
                  {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
