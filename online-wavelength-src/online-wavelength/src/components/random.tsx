import React from 'react';
import { useSlider } from './SliderContext';

const RandomizeSliderButton: React.FC = () => {
  const { setValue } = useSlider();

  const randomizeValue = () => {
    const randomValue = Math.floor(Math.random() * 101); // Random value between 0 and 100
    setValue(randomValue);
  };

  return (
    <button
      onClick={randomizeValue}
      className="m-4 border-2 border-slate-500 bg-gray-100 hover:bg-gray-300 font-serif py-2 px-4 rounded-xl"
    >
      Randomize Slider
    </button>
  );
};

export default RandomizeSliderButton;