import React, { createContext, useState, useContext, useMemo } from 'react';

const predefinedGradients = {
  joaobizzo: ['#7b1fa2', '#673ab7', '#F48FB1'],
  fire: ['#ef651a', '#E60B09', '#FFCA44'],
  joaobizzov2: ['#00FF87', '#60EFFF', '#0061FF'],
  vaporwave: ['#f72585', '#7209b7', '#3a0ca3'],
  ocean: ['#00f5d4', '#00bbf9', '#0077b6'],
  aurora: ['#4CAF50', '#8BC34A', '#CDDC39'],
  midnight: ['#2C3E50', '#34495E', '#7F8C8D'],
  dreamscape: ['#8A2BE2', '#4B0082', '#6A5ACD'],
  emerald: ['#008080', '#20B2AA', '#48D1CC'],
};

const GradientContext = createContext();

export const GradientProvider = ({ children }) => {
    const availableRandomGradients = ['joaobizzo', 'fire', 'joaobizzov2'];
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
