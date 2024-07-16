import React, { useState } from "react";
import "./roundrangeslider.css";

interface RangeSliderParam {
  interactable?: boolean;
  initialValue?: number;
  minValue: number;
  maxValue: number;
  onChange?: (value: number) => void;
}

export const RoundRangeSlider: React.FC<RangeSliderParam> = ({
  interactable = true,
  initialValue = 1,
  minValue,
  maxValue,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const pct = Math.floor(((value - minValue) / (maxValue - minValue)) * 100);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="slidecontainer">
      <input
        type="range"
        min={`${minValue}`}
        max={`${maxValue}`}
        value={`${value}`}
        className="round-slider"
        onChange={handleChange}
        style={{
          background: `linear-gradient(90deg, #fff ${pct}%, #2c2d3f ${pct}%)`,
        }}
        disabled={!interactable}
      />
      <p className={`label-slider${interactable == true ? "" : " disabled"}`}>
        {pct}%
      </p>
    </div>
  );
};
