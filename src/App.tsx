import { useState } from 'react';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Cursor />
      <Loader onComplete={() => setIsLoaded(true)} />
      
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Portfolio />
          <Showcase />
          <Testimonials />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

