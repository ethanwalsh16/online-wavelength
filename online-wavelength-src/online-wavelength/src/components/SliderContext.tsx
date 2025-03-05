import React, { createContext, useContext, useState } from 'react';

// Create the context
const SliderContext = createContext<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

// Provide context to children
export const SliderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(50); // Default value of the slider
  return (
    <SliderContext.Provider value={{ value, setValue }}>
      {children}
    </SliderContext.Provider>
  );
};

// Custom hook to use the slider context
export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('useSlider must be used within a SliderProvider');
  }
  return context;
};