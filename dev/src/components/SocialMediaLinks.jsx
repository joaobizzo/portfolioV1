// src/components/SocialMediaLinks.jsx
import React from 'react';
import { useGradient } from '../context/GradientContext';

const SocialMediaLinks = () => {
  const { colors } = useGradient(); // Destructure para obter cores

  return (
    <div className="flex mt-5 space-x-4">
      <a href="https://github.com/joaobizzo" target="_blank" rel="noopener noreferrer"
         className="social_link py-2 px-4 border border-white rounded text-white hover:bg-white"
         style={{ transition: 'duration-300', '--hover-color': colors[0] }}>GitHub</a>
      <a href="https://www.dropbox.com/scl/fi/za49esro79szvan2yly8x/JB-CV-2025-s2.pdf?rlkey=fhzzn5cm67xcomvceh193yuhi&st=c4ayci8q&dl=0" target="_blank" rel="noopener noreferrer"
         className="social_link py-2 px-4 border border-white rounded text-white hover:bg-white"
         style={{ transition: 'duration-300', '--hover-color': colors[1] }}>CV</a>
      <a href="https://www.linkedin.com/in/joao-brandt" target="_blank" rel="noopener noreferrer"
         className="social_link py-2 px-4 border border-white rounded text-white hover:bg-white"
         style={{ transition: 'duration-300', '--hover-color': colors[2] }}>Linkedin</a>
    </div>
  );
};

export default SocialMediaLinks;
