import React from 'react';
import { Scene } from './components/Scene';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0">
        <Scene />
      </div>
      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <Hero />
        </div>
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;