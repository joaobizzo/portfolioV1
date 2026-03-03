// src/components/BlobAnimation.jsx
import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const BlobAnimation = () => {
  useEffect(() => {
    const tween = KUTE.fromTo('#background1', { path: '#background1' }, { path: '#background2' }, { repeat: 999, duration: 3000, yoyo: true });
    tween.start();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <svg viewBox="0 0 1600 800" width="1600" height="800" xmlns="http://www.w3.org/2000/svg">
        {/* SVG content goes here */}
      </svg>
    </div>
  );
};

export default BlobAnimation;
