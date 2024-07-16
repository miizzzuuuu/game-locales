import React, { useState } from "react";
import "./radiogroup.css";
import { Label } from "../label";

interface ButtonProps {
  title?: string;
}

interface RadioGroupButton {
  interactable?: boolean;
  initialValue?: number;
  buttons: ButtonProps[];
  onChange?: (currentValue: number) => void;
}

export const RadioGroup: React.FC<RadioGroupButton> = ({
  interactable = true,
  initialValue = -1,
  buttons,
  onChange,
}) => {
  const [selectedItem, setSelectedItem] = useState<number>(initialValue);

  const handleItemClick = (index: number) => {
    if (!interactable) return;
    setSelectedItem(index);
    onChange?.(index);
  };

  return (
    <div className="radiogroup-container">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`radio-item${selectedItem == index ? " selected" : ""}`}
          onClick={() => handleItemClick(index)}
          disabled={!interactable}
        >
          <Label
            style={{ padding: "0px", margin: "0px" }}
            value={button.title}
          />
        </button>
      ))}
    </div>
  );
};
