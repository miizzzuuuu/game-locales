import { useState } from 'react';

import './styles.scss';

interface IProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const ToggleSwitch = ({ checked = false, onChange }: IProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        setIsChecked(!isChecked);

        onChange?.(!isChecked);
    };

    return (
        <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="slider round"></span>
        </label>
    );
};
