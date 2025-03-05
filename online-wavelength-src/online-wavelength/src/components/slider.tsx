import { useSlider } from './SliderContext';
import { useState } from 'react';

interface SliderProps {
	enabled: boolean;
	reset: boolean;
}

const Slider: React.FC<SliderProps> = ({ enabled, reset }) => {
  const { value, setValue } = useSlider();
  const [resetVal, setResetVal] = useState(reset);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  if(resetVal){
	setValue(50);
	setResetVal(false);
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="range"
        id="points"
        name="points"
        min="0"
        max="100"
		disabled = {!enabled}
        value={value}
        onChange={handleSliderChange}
        style={{ width: '50%' }}
        className="w-2/3 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-gray-700"
      />
      <div>
        <span className="font-serif">{value}%</span>
      </div>
    </div>
  );
};

export default Slider;