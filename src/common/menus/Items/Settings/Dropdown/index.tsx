import { useEffect, useRef, useState } from 'react';
import Button from '../../../../components/Button';
import { SVGIconChevronDown } from '../../../../components/SVG/SVGIconChevronDown';
import { langLogo, langName } from '../../../../utils/LangHelper';
import styles from './styles.module.scss';

interface DropdownProps {
    initialValue?: string;
    options?: string[];
    onChange?: (value: string) => void;
    style?: React.CSSProperties;
}

const Dropdown = ({ initialValue, options, onChange, style }: DropdownProps) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleBtnClick = () => {
        setOpen((currentBool) => !currentBool);
    };

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        setOpen(false);
        onChange?.(value);
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const IconSelected = selectedValue && langLogo[selectedValue];

    return (
        <div ref={dropdownRef} className={styles.dropdown} style={style}>
            <Button className={styles.button} onClick={handleBtnClick}>
                {IconSelected && <IconSelected className={styles.icon} />}
                <span className={styles.text}>{selectedValue && langName[selectedValue]}</span>

                <SVGIconChevronDown
                    className={`${styles.arrow} ${isOpen ? styles.open : styles.close}`}
                />
            </Button>

            {isOpen && (
                <div className={styles['dropdown-menu']}>
                    {options?.map((option) => {
                        const Icon = langLogo[option];

                        return (
                            <div
                                key={option}
                                className={styles['dropdown-item']}
                                onClick={() => handleOptionClick(option)}
                            >
                                {Icon && <Icon className={styles.icon} />}

                                <p className={styles.text}>{langName[option]}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
