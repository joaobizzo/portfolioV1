import React from 'react';
import { GradientProvider, useGradient } from './context/GradientContext';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

import GradientSelector from './components/GradientSelector';

function AppContent() {
  const { colors } = useGradient();

  const appGradientStyle = {
    '--gradient-color-1': colors[0],
    '--gradient-color-2': colors[1],
    '--gradient-color-3': colors[2],
    '--gradient-color-4': colors[3], // Adiciona a quarta cor
  };

  return (
    <div className="App" style={appGradientStyle}>
      <GradientSelector />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <GradientProvider>
      <AppContent />
    </GradientProvider>
  );
}

export default App;
