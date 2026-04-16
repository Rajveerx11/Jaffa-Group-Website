import { motion } from 'motion/react';
import { Home, Mountain, PenTool } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Custom Luxury Homes",
    description: "Ground-up custom builds from architectural design through final finishes."
  },
  {
    icon: Mountain,
    title: "Mountain Retreats",
    description: "Ski-in/ski-out residences and alpine escapes built for Park City's terrain."
  },
  {
    icon: PenTool,
    title: "Full Design-Build",
    description: "One integrated team. Architecture, interior design, and construction under one roof."
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-bg-primary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-sans text-[11px] tracking-[0.15em] text-accent-gold uppercase mb-4 block">
            What We Build
          </span>
          <h2 className="font-serif font-normal text-4xl md:text-[56px] text-text-primary">
            Tailored to Your Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-surface p-10 md:p-12 transition-all duration-300 hover:bg-[#222222] hover:-translate-y-1.5"
            >
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 h-[2px] bg-accent-gold w-0 transition-all duration-500 ease-out group-hover:w-full" />
              
              <div className="mb-8">
                <service.icon className="w-10 h-10 text-accent-gold stroke-[1.5]" />
              </div>
              
              <h3 className="font-serif text-[28px] md:text-[32px] text-text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="font-sans font-light text-base text-text-secondary leading-[1.8] group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
