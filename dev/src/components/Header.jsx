// src/components/Header.js
import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

const Header = () => {
  return (
          <header className="mt-2 mx-auto w-full max-w-2xl flex flex-col items-center justify-center" style={{ position: 'relative', zIndex: 10 }}>
              <h1 className="cursor-default text-8xl font-bold text-white bg-clip-text magic leading-none my-2">
                João Bizzo
              </h1>
              <h2 className="cursor-default text-lg italic text-white glow my-1">
              software engineering and machine learning
              </h2>
              <SocialMediaLinks />
          </header>
  );
};

export default Header;
