import React from 'react';
import { useGradient } from '../context/GradientContext';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Palette } from 'lucide-react';

const GradientSelector = () => {
  const {
    updateGradient,
    selectedGradientKey,
    customColors,
    predefinedGradients,
  } = useGradient();

  const getGradientPreviewStyle = (colorsArray) => {
    if (!colorsArray || colorsArray.length < 3) return {};
    const finalColors = [...colorsArray, colorsArray[0]];
    return {
      background: `linear-gradient(to right, ${finalColors[0]}, ${finalColors[1]}, ${finalColors[2]}, ${finalColors[3]})`,
    };
  };

  const handleRadioChange = (value) => {
    updateGradient(value, value === 'custom' ? customColors : null);
  };

  const handleCustomColorChange = (index, event) => {
    const newCustomColors = [...customColors];
    newCustomColors[index] = event.target.value;
    updateGradient('custom', newCustomColors);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed top-4 right-4 z-50 border border-white bg-gray-800/10 hover:bg-gray-800/60 transition-all duration-200 backdrop-blur-sm"
        >
          <Palette className="h-5 w-5 text-white/80 hover:text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black/5 text-white border-gray-700 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-white">Select Your Gradient</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <RadioGroup
            value={selectedGradientKey}
            onValueChange={handleRadioChange}
            className="grid grid-cols-2 gap-4"
          >
            {Object.entries(predefinedGradients).map(([key, gradientColors]) => (
              <div key={key} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={key} 
                  id={key} 
                  className="h-4 w-4 border-white data-[state=checked]:border-white" 
                />
                <Label htmlFor={key} className="flex items-center cursor-pointer text-white">
                  <div
                    className="w-8 h-8 rounded-full mr-2 border border-white/20 shadow-inner"
                    style={getGradientPreviewStyle(gradientColors)}
                  ></div>
                  <span className="capitalize">{key}</span>
                </Label>
              </div>
            ))}

            {/* Custom Gradient Option */}
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="custom" 
                id="custom" 
                className="h-4 w-4 border-white data-[state=checked]:border-white" 
              />
              <Label htmlFor="custom" className="flex items-center cursor-pointer text-white">
                <div
                  className="w-8 h-8 rounded-full mr-2 border border-white/20 shadow-inner"
                  style={getGradientPreviewStyle(customColors)}
                ></div>
                <span>Custom</span>
              </Label>
            </div>
          </RadioGroup>

          {selectedGradientKey === 'custom' && (
            <div className="mt-6 p-4 border border-gray-700 rounded-md bg-gray-800/50">
              <h3 className="text-lg font-semibold text-white mb-3">Customize Your Gradient</h3>
              <div className="grid grid-cols-1 gap-4">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="flex items-center justify-between">
                    <Label htmlFor={`color-${index}`} className="text-white mr-2">{`Color ${index + 1}`}</Label>
                    <input
                      type="color"
                      id={`color-${index}`}
                      value={customColors[index]}
                      onChange={(event) => handleCustomColorChange(index, event)}
                      className="w-16 h-10 border border-gray-600 rounded-md cursor-pointer"
                      title={customColors[index]}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GradientSelector;