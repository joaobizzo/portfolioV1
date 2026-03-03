import React, { createContext, useState, useContext, useMemo } from 'react';

const predefinedGradients = {
  magic: ['#7b1fa2', '#673ab7', '#F48FB1'],
  dragonfire: ['#ef651a', '#E60B09', '#FFCA44'],
  frutiger: ['#00FF87', '#60EFFF', '#0061FF'],
  brasil: ['#006437', '#009739', '#FFDF00'],
  midnight: ['#2C3E50', '#34495E', '#7F8C8D'],
  
};

const GradientContext = createContext();

export const GradientProvider = ({ children }) => {
    const availableRandomGradients = ['magic', 'dragonfire', 'frutiger'];
  const initialRandomGradient = availableRandomGradients[Math.floor(Math.random() * availableRandomGradients.length)];
  const [selectedGradientKey, setSelectedGradientKey] = useState(initialRandomGradient);
  const [customColors, setCustomColors] = useState(['#CCCCCC', '#999999', '#666666']);

  const colors = useMemo(() => {
    let baseColors;
    if (selectedGradientKey === 'custom') {
      baseColors = customColors;
    } else {
      baseColors = predefinedGradients[selectedGradientKey] || predefinedGradients.vaporwave;
    }
    // Aplica a lógica: [c1, c2, c3] -> [c1, c2, c3, c1]
    return [...baseColors, baseColors[0]];
  }, [selectedGradientKey, customColors]);

  const updateGradient = (key, newCustomColors = null) => {
    if (key === 'custom') {
      if (newCustomColors) {
        setCustomColors(newCustomColors);
      }
      setSelectedGradientKey('custom');
    } else if (predefinedGradients[key]) {
      setSelectedGradientKey(key);
    } else {
      setSelectedGradientKey('vaporwave');
    }
  };

  const value = {
    colors,
    updateGradient,
    selectedGradientKey,
    customColors,
    predefinedGradients,
  };

  return (
    <GradientContext.Provider value={value}>
      {children}
    </GradientContext.Provider>
  );
};

export const useGradient = () => useContext(GradientContext);
