export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-accent-gold pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <span className="font-sans text-xl tracking-[0.2em] text-white uppercase mb-4 block">Jaffa Group</span>
            <p className="font-sans font-light text-sm text-text-secondary mb-6">
              Crafting Luxury. Building Legacy.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.15em] text-white uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Portfolio', 'Services', 'Team', 'Blog'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="font-sans font-light text-sm text-text-secondary hover:text-accent-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.15em] text-white uppercase mb-6">Contact</h4>
            <ul className="space-y-4 font-sans font-light text-sm text-text-secondary">
              <li>Park City, Utah</li>
              <li>
                <a href="mailto:info@jaffagroup.com" className="hover:text-accent-gold transition-colors">info@jaffagroup.com</a>
              </li>
              <li>
                <a href="tel:+14355550123" className="hover:text-accent-gold transition-colors">+1 (435) 555-0123</a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.15em] text-white uppercase mb-6">Start Your Build</h4>
            <p className="font-sans font-light text-sm text-text-secondary mb-6">
              Ready to begin? Contact us to discuss your custom home project.
            </p>
            <a 
              href="#contact"
              className="inline-block px-6 py-3 border border-accent-gold text-accent-gold font-sans text-[11px] tracking-[0.12em] uppercase hover:bg-accent-gold hover:text-black transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans font-light text-xs text-text-secondary">
            © 2025 Jaffa Group. All Rights Reserved. Park City, Utah.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans font-light text-xs text-text-secondary hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans font-light text-xs text-text-secondary hover:text-accent-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
