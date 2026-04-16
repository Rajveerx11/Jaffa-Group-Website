import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const filters = ['ALL', 'MODERN MOUNTAIN', 'CONTEMPORARY', 'SKI-IN/SKI-OUT', 'ESTATE'];

const projects = [
  { id: 1, name: 'Promontory Ridge Estate', location: 'Promontory, UT', category: 'ESTATE', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Deer Valley Retreat', location: 'Deer Valley, UT', category: 'SKI-IN/SKI-OUT', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Park Meadows Modern', location: 'Park Meadows, UT', category: 'CONTEMPORARY', image: 'https://images.unsplash.com/photo-1600607687931-cecebd80d6c0?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Tuhaye Ski Villa', location: 'Tuhaye, UT', category: 'MODERN MOUNTAIN', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Victory Ranch Compound', location: 'Victory Ranch, UT', category: 'ESTATE', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Old Town Penthouse', location: 'Old Town, UT', category: 'CONTEMPORARY', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop' },
  { id: 7, name: 'Summit Park Family Home', location: 'Summit Park, UT', category: 'MODERN MOUNTAIN', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop' },
  { id: 8, name: 'Canyons Luxury Chalet', location: 'Canyons, UT', category: 'SKI-IN/SKI-OUT', image: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=800&auto=format&fit=crop' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="w-full bg-bg-primary py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-serif font-normal text-4xl md:text-[56px] text-text-primary">
            A Portfolio Built on Precision
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-sans text-[11px] tracking-[0.12em] uppercase transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-accent-gold text-black' 
                  : 'bg-transparent text-white hover:text-accent-gold'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="masonry-item relative group overflow-hidden cursor-none"
              >
                <div className="aspect-[4/5] w-full overflow-hidden border border-transparent group-hover:border-accent-gold transition-colors duration-300">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <h3 className="font-serif text-[24px] md:text-[28px] text-white text-center px-4 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.name}
                    </h3>
                    <span className="font-sans text-[12px] tracking-[0.1em] text-accent-gold uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href="#portfolio"
            className="inline-block px-8 py-4 border border-accent-gold text-accent-gold font-sans text-[12px] tracking-[0.12em] uppercase hover:bg-accent-gold hover:text-black transition-all duration-300"
          >
            View All Projects →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
