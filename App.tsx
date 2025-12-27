import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LabSection from './components/LabSection';
import StrategySection from './components/StrategySection';
import InsightsSection from './components/InsightsSection';
import HeritageSection from './components/HeritageSection';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';

const App: React.FC = () => {
  // Custom cursor logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-paper text-graphite overflow-hidden selection:bg-gold selection:text-graphite">
      
      {/* Background Interactive Layer */}
      <CanvasBackground />
      
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>

      {/* Custom Spotlight Cursor (Decorative) */}
      <div 
        className="fixed w-96 h-96 bg-gold/10 rounded-full blur-[80px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      
      {/* Small dot cursor */}
      <div 
        className={`fixed w-2 h-2 bg-graphite rounded-full pointer-events-none z-[60] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hidden md:block ${isPointer ? 'scale-150 bg-transparent border border-graphite' : ''}`}
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <LabSection />
          <StrategySection />
          <InsightsSection />
          <HeritageSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;