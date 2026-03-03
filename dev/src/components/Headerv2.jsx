// src/components/Header.js
import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';
import FaultyTerminal from '../components/ReactBits/FaultyTerminal'
import GlassSurface from '../components/ReactBits/GlassSurface';

const Header = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      
      
          <header className="mt-2 mx-auto w-full max-w-2xl flex flex-col items-center justify-center" style={{ position: 'relative', zIndex: 10 }}>
            <div className="glass-surface">
              <h1 className="cursor-default text-8xl font-bold text-white bg-clip-text magic leading-none my-2">
                João Bizzo
              </h1>
              <h2 className="cursor-default text-lg italic text-white glow my-1">
              software engineering and machine learning
              </h2>
              <SocialMediaLinks />
            </div>
          </header>

      
      
       <FaultyTerminal
        scale={3}
        digitSize={1.8}
        timeScale={0.5}
        noiseAmp={0.8}
        brightness={0.6}
        scanlineIntensity={1}
        curvature={0.1}
        mouseStrength={0.8}
        tint='#8f00ff'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '90vh',
          zIndex: 1,}}
      />
    </div>
  );
};

export default Header;
