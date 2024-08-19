import { useState } from 'react';
import { Input } from '@/components/ui/input';

const Slider = () => {
  const [maxValue, setMaxValue] = useState(1000);

  const handleMaxChange = (e) => {
    setMaxValue(Math.max(Number(e.target.value)));
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-base font-semibold ">Amount Range</h2>
      <div className="flex justify-between gap-4">
        <input
          type="number"
          value="0"
          className="w-20 p-2 text-center border rounded-md"
        />
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          className="w-20 p-2 text-center border rounded-md"
        />
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="1000"
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute top-0 left-0 w-full"
        />
      </div>
      <div className="flex justify-between ">
        <span>0</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
};

export default Slider;

